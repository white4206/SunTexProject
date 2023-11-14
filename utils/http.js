import { useMemberStore } from "@/stores";
// 接口基地址
const baseURL = "http://140.143.139.167:8001";

// 添加请求拦截器
const httpInterceptor = {
  // 拦截前触发
  invoke(options) {
    if (!options.url.startsWith("http")) {
      options.url = baseURL + options.url;
    }
    // 请求超时，默认60s
    options.timeout = 10000;
    // 添加小程序端请求头标识
    options.header = {
      ...options,
      "source-client": "miniapp",
    };
    // 添加token请求头标识
    const memberStore = useMemberStore();
    const token = memberStore.profile.token;
    if (token) {
      options.header.Authorization = token;
    }
    // console.log(options);
  },
};
uni.addInterceptor("request", httpInterceptor);
uni.addInterceptor("uploadFile", httpInterceptor);

// 添加响应拦截器
export const http = (options) => {
  // 返回promise对象
  return new Promise((resolve, reject) => {
    uni.request({
      ...options,
      // 响应成功
      success(res) {
        // 状态码判断
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // promise返回成功核心数据
          resolve(res.data);
        } else if (res.statusCode === 401) {
          const memberStore = useMemberStore();
          memberStore.clearProfile();
          uni.navigateTo({ url: "/pages/index/index" });
          reject(res);
        } else {
          console.log(res)
          uni.showToast({
            title: res.data.msg || "请求错误",
            icon: "error",
            mask: true,
          });
        }
      },
      fail(err) {
        console.log(err)
        uni.showToast({
          title: "网络错误",
          icon: "error",
          mask: true,
        });
        reject(err.data);
      },
    });
  });
};
