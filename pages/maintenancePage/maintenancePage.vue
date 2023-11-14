<template>
    <CustomNavbar :title="title" />
    <view class="root">
        <view class="container" :style="{ marginTop: safeAreaInsets.top + 46 + 'px' }">
            <view class="addYourCar-box">
                <navigator class="addYourCar" url="/pages/addYourCarPage/addYourCarPage">
                    <view class="yourCar">
                        <text>{{ isAdd ? '路虎揽胜' : '您还未添加车辆' }}</text>
                        <image src="../../static/images/right_arrow_.png" mode="scaleToFill" />
                    </view>
                    <view class="toAdd">
                        <image src="../../static/images/add.png" mode="scaleToFill" />
                        <text>添加您的车辆</text>
                    </view>
                </navigator>
            </view>
            <view class="maintenanceItems">
                <navigator :url="`/pages/maintenanceGoods/maintenanceGoods?categoryId=${item.id}`" class="maintenanceItem"
                    v-for="item in maintenanceItems" :key="item.id">
                    <view class="maintenanceItem-image">
                        <image :src="item.imgURL" mode="scaleToFill" />
                    </view>
                    <view class="maintenanceItem-text">
                        <text>{{ item.title }}</text>
                    </view>
                </navigator>
            </view>
            <view class="divider-text">
                <text>-为您推荐-</text>
            </view>
            <view class="recommendedItems">
                <navigator
                    :url="`/pages/goodsDetail/goodsDetail?id=${item.id}&goodsTitle=${item.title}&goodsPrice=${item.price}&goodsPicture=${item.imgURL}`"
                    class="recommendedItem" v-for="item in recommendedItems" :key="item.id">
                    <view class="recommendedItem-image">
                        <image :src="item.imgURL" mode="scaleToFill" />
                    </view>
                    <view class="recommendedItem-desc">
                        <view class="goods-title">
                            <text>{{ item.title }}</text>
                        </view>
                        <view class="goods-price">
                            <text>{{ '￥' + item.price }}</text>
                            <text>查看详情</text>
                        </view>
                    </view>
                </navigator>
            </view>
        </view>
    </view>
</template>

<script setup>
import CustomNavbar from '../../components/CustomNavbar/CustomNavbar.vue';
import { onLoad } from '@dcloudio/uni-app'
import { getKind } from '@/api/kind'
import { getCategory } from '@/api/maintenance'
import { ref, onMounted } from 'vue'

const { safeAreaInsets } = uni.getSystemInfoSync();

const title = ref()
const kindname = ref()
const maintenanceItems = ref([])
const categoryId = ref()
onLoad((options) => {
    title.value = options.title
    kindname.value = options.kindname
})
const recommendedItems = ref([])
const getCategoryList = () => {
    getKind(kindname.value).then(res => {
        maintenanceItems.value = res.data.map(item => {
            return {
                imgURL: 'http://140.143.139.167' + item.headImage,
                title: item.sonKind,
                id: item.id
            }
        })
        getSubCategoryList()
    })
}
const getSubCategoryList = () => {
    console.log(maintenanceItems.value[0].id)
    getCategory(maintenanceItems.value[0].id).then(res => {
        console.log(res)
        recommendedItems.value = res.data.map(item => {
            return {
                imgURL: 'http://140.143.139.167' + item.headimage,
                id: item.id,
                price: item.minprice || item.maxprice,
                title: item.name
            }
        })
        console.log(recommendedItems.value)
    })
}
onMounted(() => {
    getCategoryList()
})
const isAdd = ref(false)
</script>

<style lang="scss">
page,
.root {
    background-color: #F2F3F5;
}

.container {
    .addYourCar-box {
        padding: 20rpx;
        padding-bottom: 0;

        .addYourCar {
            padding: 40rpx;
            border-radius: 20rpx;
            background-color: #ffffff;

            .yourCar {
                display: flex;
                align-items: center;
                color: #A8ABB2;
                margin-bottom: 10rpx;

                image {
                    width: 30rpx;
                    height: 30rpx;
                    margin-left: 10rpx;
                }
            }
        }

        .toAdd {
            display: flex;
            align-items: center;
            font-size: 28rpx;

            image {
                width: 30rpx;
                height: 30rpx;
                margin-right: 10rpx;
            }
        }
    }

    .maintenanceItems {
        display: flex;
        flex-wrap: wrap;
        background-color: #ffffff;
        margin: 20rpx;
        padding: 20rpx;
        border-radius: 20rpx;

        .maintenanceItem {
            flex: 0 0 25%;
            text-align: center;
            font-size: 28rpx;

            .maintenanceItem-image {
                image {
                    border-radius: 30rpx;
                    width: 100rpx;
                    height: 100rpx;
                }
            }
        }
    }

    .divider-text {
        text-align: center;
        font-size: 40rpx;
        color: #337ecc;
        font-weight: bold;
    }

    .recommendedItems {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 20rpx;

        .recommendedItem {
            border-radius: 20rpx;
            box-sizing: border-box;
            background-color: #ffffff;
            margin-bottom: 10rpx;
            flex: 0 0 45%;

            .recommendedItem-image {
                border-radius: 20rpx;
                width: 345rpx;

                image {
                    border-radius: 20rpx;
                    width: 345rpx;
                    height: 345rpx;
                }
            }


            .recommendedItem-desc {
                padding: 20rpx;

                .goods-title {
                    font-size: 28rpx;
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                }

                .goods-price {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 36rpx;
                    font-weight: bold;
                    color: #cf4444;

                    text:nth-child(2) {
                        font-weight: 400;
                        font-size: 24rpx;
                        color: #A8ABB2;
                    }
                }
            }
        }
    }
}
</style>
