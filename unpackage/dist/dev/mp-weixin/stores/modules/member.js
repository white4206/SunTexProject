"use strict";
const common_vendor = require("../../common/vendor.js");
const useMemberStore = common_vendor.defineStore(
  "member",
  () => {
    const profile = common_vendor.ref();
    const setProfile = (val) => {
      profile.value = val;
    };
    const clearProfile = () => {
      profile.value = "";
    };
    return {
      profile,
      setProfile,
      clearProfile
    };
  },
  {
    persist: {
      storage: {
        getItem(key) {
          return common_vendor.index.getStorageSync(key);
        },
        setItem(key, value) {
          return common_vendor.index.setStorageSync(key, value);
        }
      }
    }
  }
);
exports.useMemberStore = useMemberStore;
