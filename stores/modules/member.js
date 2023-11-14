import { defineStore } from "pinia";
import { ref } from "vue";
// 定义store
export const useMemberStore = defineStore(
  "member",
  () => {
    // 个人信息
    const profile = ref();

    // 保存个人信息，登录使用
    const setProfile = (val) => {
      profile.value = val;
    };

    // 清理会员信息，退出使用
    const clearProfile = () => {
      profile.value = "";
    };
    return {
      profile,
      setProfile,
      clearProfile,
    };
  },
  {
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          return uni.setStorageSync(key, value)
        },
      },
    },
  }
);
