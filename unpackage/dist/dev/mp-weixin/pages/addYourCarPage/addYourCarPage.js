"use strict";
const common_vendor = require("../../common/vendor.js");
const api_car = require("../../api/car.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_uni_indexed_list2 = common_vendor.resolveComponent("uni-indexed-list");
  const _easycom_uni_data_picker2 = common_vendor.resolveComponent("uni-data-picker");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  (_easycom_uni_indexed_list2 + _easycom_uni_data_picker2 + _easycom_uni_popup2 + _easycom_uni_card2)();
}
const _easycom_uni_indexed_list = () => "../../uni_modules/uni-indexed-list/components/uni-indexed-list/uni-indexed-list.js";
const _easycom_uni_data_picker = () => "../../uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_uni_indexed_list + _easycom_uni_data_picker + _easycom_uni_popup + _easycom_uni_card)();
}
const _sfc_main = {
  __name: "addYourCarPage",
  setup(__props) {
    const select = common_vendor.ref();
    const isSelect = common_vendor.ref(true);
    const handleSelect = () => {
      isSelect.value = false;
      selectPopup.value.close();
    };
    common_vendor.ref();
    const brandList = common_vendor.ref([]);
    const getCarBrand = () => {
      api_car.carBrandList().then((res) => {
        console.log(res);
        let tempObjet = [];
        let tempObjetOther = {};
        for (let i = 0; i < 26; i++) {
          tempObjet[i] = {};
        }
        let tempArray = {};
        let tempArrayOther = [];
        for (let i = 0; i < 26; i++) {
          let temp = "tempArray" + String.fromCharCode(65 + i);
          tempArray[temp] = [];
        }
        res.data.forEach((item) => {
          if (item.remark === "A") {
            tempArray.tempArrayA.push(item.dictLabel);
            tempObjet[0] = {
              letter: item.remark,
              data: tempArray.tempArrayA,
              code: item.dictCode
            };
          } else if (item.remark === "B") {
            tempArray.tempArrayB.push(item.dictLabel);
            tempObjet[1] = {
              letter: item.remark,
              data: tempArray.tempArrayB,
              code: item.dictCode
            };
          } else if (item.remark === "C") {
            tempArray.tempArrayC.push(item.dictLabel);
            tempObjet[2] = {
              letter: item.remark,
              data: tempArray.tempArrayC,
              code: item.dictCode
            };
          } else if (item.remark === "D") {
            tempArray.tempArrayD.push(item.dictLabel);
            tempObjet[3] = {
              letter: item.remark,
              data: tempArray.tempArrayD,
              code: item.dictCode
            };
          } else if (item.remark === "E") {
            tempArray.tempArrayE.push(item.dictLabel);
            tempObjet[4] = {
              letter: item.remark,
              data: tempArray.tempArrayE,
              code: item.dictCode
            };
          } else if (item.remark === "F") {
            tempArray.tempArrayF.push(item.dictLabel);
            tempObjet[5] = {
              letter: item.remark,
              data: tempArray.tempArrayF,
              code: item.dictCode
            };
          } else if (item.remark === "G") {
            tempArray.tempArrayG.push(item.dictLabel);
            tempObjet[6] = {
              letter: item.remark,
              data: tempArray.tempArrayG,
              code: item.dictCode
            };
          } else if (item.remark === "H") {
            tempArray.tempArrayH.push(item.dictLabel);
            tempObjet[7] = {
              letter: item.remark,
              data: tempArray.tempArrayH,
              code: item.dictCode
            };
          } else if (item.remark === "I") {
            tempArray.tempArrayI.push(item.dictLabel);
            tempObjet[8] = {
              letter: item.remark,
              data: tempArray.tempArrayI,
              code: item.dictCode
            };
          } else if (item.remark === "J") {
            tempArray.tempArrayJ.push(item.dictLabel);
            tempObjet[9] = {
              letter: item.remark,
              data: tempArray.tempArrayJ,
              code: item.dictCode
            };
          } else if (item.remark === "K") {
            tempArray.tempArrayK.push(item.dictLabel);
            tempObjet[10] = {
              letter: item.remark,
              data: tempArray.tempArrayK,
              code: item.dictCode
            };
          } else if (item.remark === "L") {
            tempArray.tempArrayL.push(item.dictLabel);
            tempObjet[11] = {
              letter: item.remark,
              data: tempArray.tempArrayL,
              code: item.dictCode
            };
          } else if (item.remark === "M") {
            tempArray.tempArrayM.push(item.dictLabel);
            tempObjet[12] = {
              letter: item.remark,
              data: tempArray.tempArrayM,
              code: item.dictCode
            };
          } else if (item.remark === "N") {
            tempArray.tempArrayN.push(item.dictLabel);
            tempObjet[13] = {
              letter: item.remark,
              data: tempArray.tempArrayN,
              code: item.dictCode
            };
          } else if (item.remark === "O") {
            tempArray.tempArrayO.push(item.dictLabel);
            tempObjet[14] = {
              letter: item.remark,
              data: tempArray.tempArrayO,
              code: item.dictCode
            };
          } else if (item.remark === "P") {
            tempArray.tempArrayP.push(item.dictLabel);
            tempObjet[15] = {
              letter: item.remark,
              data: tempArray.tempArrayP,
              code: item.dictCode
            };
          } else if (item.remark === "Q") {
            tempArray.tempArrayQ.push(item.dictLabel);
            tempObjet[16] = {
              letter: item.remark,
              data: tempArray.tempArrayQ,
              code: item.dictCode
            };
          } else if (item.remark === "R") {
            tempArray.tempArrayR.push(item.dictLabel);
            tempObjet[17] = {
              letter: item.remark,
              data: tempArray.tempArrayR,
              code: item.dictCode
            };
          } else if (item.remark === "S") {
            tempArray.tempArrayS.push(item.dictLabel);
            tempObjet[18] = {
              letter: item.remark,
              data: tempArray.tempArrayS,
              code: item.dictCode
            };
          } else if (item.remark === "T") {
            tempArray.tempArrayT.push(item.dictLabel);
            tempObjet[19] = {
              letter: item.remark,
              data: tempArray.tempArrayT,
              code: item.dictCode
            };
          } else if (item.remark === "U") {
            tempArray.tempArrayU.push(item.dictLabel);
            tempObjet[20] = {
              letter: item.remark,
              data: tempArray.tempArrayU,
              code: item.dictCode
            };
          } else if (item.remark === "V") {
            tempArray.tempArrayV.push(item.dictLabel);
            tempObjet[21] = {
              letter: item.remark,
              data: tempArray.tempArrayV,
              code: item.dictCode
            };
          } else if (item.remark === "W") {
            tempArray.tempArrayW.push(item.dictLabel);
            tempObjet[22] = {
              letter: item.remark,
              data: tempArray.tempArrayW,
              code: item.dictCode
            };
          } else if (item.remark === "X") {
            tempArray.tempArrayX.push(item.dictLabel);
            tempObjet[23] = {
              letter: item.remark,
              data: tempArray.tempArrayX,
              code: item.dictCode
            };
          } else if (item.remark === "Y") {
            tempArray.tempArrayY.push(item.dictLabel);
            tempObjet[24] = {
              letter: item.remark,
              data: tempArray.tempArrayY,
              code: item.dictCode
            };
          } else if (item.remark === "Z") {
            tempArray.tempArrayZ.push(item.dictLabel);
            tempObjet[25] = {
              letter: item.remark,
              data: tempArray.tempArrayZ,
              code: item.dictCode
            };
          } else {
            tempArrayOther.push(item.dictLabel);
            tempObjetOther = {
              letter: item.remark,
              data: tempArrayOther,
              code: item.dictCode
            };
          }
        });
        tempObjet = tempObjet.filter((value) => Object.keys(value).length != 0);
        tempObjet.map((item) => {
          brandList.value.push(item);
        });
        if (JSON.stringify(tempObjetOther) !== "{}") {
          brandList.value.push(tempObjetOther);
        }
      });
    };
    const getCar = (brandName) => {
      api_car.selectBrand(brandName).then((res) => console.log(res));
    };
    common_vendor.onMounted(() => {
      getCarBrand();
    });
    common_vendor.ref();
    const dataTree = common_vendor.ref([
      {
        text: "A6",
        value: "A6",
        children: [
          {
            text: "发动机排量1.8T",
            value: "1.8T",
            children: [{
              text: "2001年生产",
              value: "2001",
              children: [{
                text: "2001款 1.8T 自动",
                value: "2001-1.8T-auto"
              }]
            }]
          },
          {
            text: "发动机排量1.9T",
            value: "1.9T"
          }
        ]
      },
      {
        text: "A7",
        value: "A7",
        children: [
          {
            text: "发动机排量1.8T",
            value: "1.8T"
          },
          {
            text: "发动机排量1.9T",
            value: "1.9T"
          }
        ]
      },
      {
        text: "A8",
        value: "A8",
        disable: true
      }
    ]);
    const onnodeclick = (e) => {
      console.log(e);
    };
    const onpopupopened = (e) => {
      console.log("popupopened");
    };
    const onpopupclosed = (e) => {
      console.log("popupclosed");
    };
    const onchange = (e) => {
      console.log(e);
    };
    const selectPopup = common_vendor.ref();
    const bindClick = (e) => {
      console.log(e);
      getCar(e.item.name);
      selectPopup.value.open();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: isSelect.value
      }, isSelect.value ? {
        b: common_vendor.o(bindClick),
        c: common_vendor.p({
          options: brandList.value,
          ["show-select"]: false
        })
      } : {}, {
        d: common_vendor.o(onchange),
        e: common_vendor.o(onnodeclick),
        f: common_vendor.o(onpopupopened),
        g: common_vendor.o(onpopupclosed),
        h: common_vendor.o(($event) => select.value = $event),
        i: common_vendor.p({
          placeholder: "请选择款型",
          ["popup-title"]: "请选择款型",
          localdata: dataTree.value,
          modelValue: select.value
        }),
        j: common_vendor.o(handleSelect),
        k: common_vendor.sr(selectPopup, "0e1ee08e-1", {
          "k": "selectPopup"
        }),
        l: common_vendor.p({
          type: "right"
        }),
        m: !isSelect.value
      }, !isSelect.value ? {
        n: common_vendor.f(3, (item, k0, i0) => {
          return common_vendor.e(_ctx.isDefault ? {} : {}, {
            a: "0e1ee08e-3-" + i0,
            b: item
          });
        }),
        o: _ctx.isDefault,
        p: common_vendor.p({
          thumbnail: _ctx.avatar,
          title: "我的车",
          ["sub-title"]: "2022款 1-8T 自动挡"
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Users/white_/CodeSpace/HbuilderProjects/SunTexProject/pages/addYourCarPage/addYourCarPage.vue"]]);
wx.createPage(MiniProgramPage);
