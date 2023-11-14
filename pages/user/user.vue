<template>
    <scroll-view enable-back-to-top class="viewport" scroll-y
        :style="{ backgroundImage: 'url(/static/images/center_bg.png)' }">
        <!-- 个人资料 -->
        <view class="profile" :style="{ paddingTop: safeAreaInsets.top + 'px' }">
            <!-- 情况1：已登录 -->
            <view class="overview" v-if="false">
                <navigator url="/pagesMember/profile/profile" hover-class="none">
                    <image class="avatar" src="#" mode="aspectFill"></image>
                </navigator>
                <view class="meta">
                    <view class="nickname">
                        <!-- {{ memberStore.profile.nickname || memberStore.profile.account }} -->
                    </view>
                    <navigator class="extra" url="/pagesMember/profile/profile" hover-class="none">
                        <text class="update">更新头像昵称</text>
                    </navigator>
                </view>
            </view>
            <!-- 情况2：未登录 -->
            <view class="overview" v-else>
                <navigator url="/pages/login/login" hover-class="none">
                    <image class="avatar gray" mode="aspectFill"
                        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png">
                    </image>
                </navigator>
                <view class="meta">
                    <navigator url="/pages/login/login" hover-class="none" class="nickname">
                        未登录
                    </navigator>
                    <view class="extra">
                        <text class="tips">点击登录账号</text>
                    </view>
                </view>
            </view>
        </view>
        <!-- 我的订单 -->
        <view class="orders">
            <view class="title">
                我的订单
                <view class="navigator" url="/pages/shopcart/shopcart" @tap="toShopCar">
                    查看全部订单<text class="icon-right">></text>
                </view>
            </view>
            <view class="section">
                <!-- 订单 -->
                <view v-for="item in orderTypes" :key="item.type" url="/pages/shopcart/shopcart" class="navigator"
                    @tap="toShopCar">
                    <view class="icon-image">
                        <image src="../../static/images/shopcart_selected.png" mode="scaleToFill" />
                    </view>
                    <view>
                        {{ item.text }}
                    </view>
                </view>
            </view>
        </view>
        <view class="option">
            <view class="option-item">
                <view class="text">
                    设置
                </view>
                <view class="right_arrow">
                    <image src="../../static/images/right_arrow_.png" mode="scaleToFill" />
                </view>
            </view>
            <view class="option-item">
                <view class="text">
                    退出登录
                </view>
                <view class="right_arrow">
                    <image src="../../static/images/exit.png" mode="scaleToFill" />
                </view>
            </view>
        </view>
    </scroll-view>
</template>

<script setup>
import { ref } from 'vue'
const { safeAreaInsets } = uni.getSystemInfoSync();
// 订单选项
const orderTypes = ref([
    { type: '1', text: '购物车' },
])
const toShopCar = () => {
    uni.switchTab({ url: '/pages/shopcart/shopcart' })
}
</script>

<style lang="scss">
page {
    height: 100%;
    overflow: hidden;
    background-color: #F2F3F5;
    ;
}

.viewport {
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% auto;
}

/* 用户信息 */
.profile {
    margin-top: 30rpx;
    position: relative;

    .overview {
        display: flex;
        height: 120rpx;
        padding: 0 36rpx;
        color: #fff;
    }

    .avatar {
        width: 120rpx;
        height: 120rpx;
        border-radius: 50%;
        background-color: #eee;
    }

    .gray {
        filter: grayscale(100%);
    }

    .meta {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        line-height: 30rpx;
        padding: 16rpx 0;
        margin-left: 20rpx;
    }

    .nickname {
        max-width: 180rpx;
        margin-bottom: 16rpx;
        font-size: 30rpx;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .extra {
        display: flex;
        font-size: 20rpx;
    }

    .tips {
        font-size: 22rpx;
    }

    .update {
        padding: 3rpx 10rpx 1rpx;
        color: rgba(255, 255, 255, 0.8);
        border: 1rpx solid rgba(255, 255, 255, 0.8);
        margin-right: 10rpx;
        border-radius: 30rpx;
    }

    .settings {
        position: absolute;
        bottom: 0;
        right: 40rpx;
        font-size: 30rpx;
        color: #fff;
    }
}

/* 我的订单 */
.orders {
    position: relative;
    z-index: 99;
    padding: 30rpx;
    margin: 50rpx 20rpx 0;
    background-color: #fff;
    border-radius: 10rpx;
    box-shadow: 0 4rpx 6rpx rgba(240, 240, 240, 0.6);

    .title {
        height: 40rpx;
        line-height: 40rpx;
        font-size: 28rpx;
        color: #1e1e1e;

        .navigator {
            font-size: 24rpx;
            color: #939393;
            float: right;
        }
    }

    .section {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 40rpx 20rpx 10rpx;

        .navigator {
            text-align: center;
            font-size: 24rpx;
            color: #333;

            .icon-image {
                image {
                    width: 50rpx;
                    height: 50rpx;
                }
            }
        }
    }
}

.option {
    margin: 20rpx;

    .option-item {
        background-color: #ffffff;
        display: flex;
        justify-content: space-between;
        padding: 20rpx;
        border-radius: 20rpx;
        margin: 20rpx 0;

        .right_arrow {
            image {
                width: 30rpx;
                height: 30rpx;
            }
        }
    }
}
</style>
