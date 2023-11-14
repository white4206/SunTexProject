<template>
    <CustomNavbar :title="'商品详情'" />
    <view class="root">
        <view class="container" :style="{ marginTop: safeAreaInsets.top + 46 + 'px' }">
            <view class="swiper-box">
                <uni-swiper-dot mode="default" :current="current" :info="swiperItems">
                    <swiper class="swiper-box" :autoplay="true" :interval="3000" :duration="1000" @change="swiperChange">
                        <swiper-item v-for="item in swiperItems" :key="item.id">
                            <view class="swiper-item">
                                <image :src="item.imgURL" mode="scaleToFill" @tap="onPreviewImage(item.url)" />
                            </view>
                        </swiper-item>
                    </swiper>
                </uni-swiper-dot>
            </view>
            <view class="goods-info">
                <view class="price"><text>{{ '￥' + goodsPrice }}</text></view>
                <view class="title">{{ goodsTitle }}</view>
            </view>
            <view class="service-box">
                <view class="services">
                    <view class="service-item" @click="serviceOpen">
                        <view class="item-name">服务</view>
                        <view class="item-content">
                            <text>到店安装</text>
                            <image src="../../static/images/right_arrow_.png" mode="scaleToFill" />
                        </view>
                        <uni-popup ref="servicePopup" type="bottom">
                            <view class="servicePopup">
                                <view class="service-title">
                                    安装服务
                                </view>
                                <view class="service-content">
                                    <view class="service-content-item">
                                        <view class="title">服务</view>
                                        <view class="content">到店安装</view>
                                    </view>
                                </view>
                                <view class="closePopup">
                                    <button @click="serviceClose">我知道了</button>
                                </view>
                            </view>
                        </uni-popup>
                    </view>
                    <view class="service-item" @click="addToShopCart">
                        <view class="item-name">选择</view>
                        <view class="item-content">
                            <text>{{ selectArrText }}</text>
                            <image src="../../static/images/right_arrow_.png" mode="scaleToFill" />
                        </view>
                        <vk-data-goods-sku-popup add-cart-background-color="#337ecc" price-color="#cf4444" :mode="2"
                            :actived-style="{ backgroundColor: '#337ecc40', border: '1px solid #337ecc', color: '#337ecc' }"
                            v-model="isShowSKU" :localdata="goodsDetailData" ref="addToShopCartSKU"
                            @add-cart="handleAddCart" />
                    </view>
                </view>
            </view>
            <view class="instruction-box" @click="instructionOpen">
                <view class="instruction">
                    <view class="instruction-item">
                        <view class="item-name">说明</view>
                        <view class="item-content">
                            <text>将商品加入购物车，到店下单结账</text>
                            <image src="../../static/images/right_arrow_.png" mode="scaleToFill" />
                        </view>
                    </view>
                </view>
                <uni-popup ref="instructionPopup" type="bottom">
                    <view class="instructionPopup">
                        <view class="instruction-title">
                            商品说明
                        </view>
                        <view class="instruction-content">
                            <view class="instruction-content-item">
                                <view class="title">说明</view>
                                <view class="content">将商品加入购物车,到店下单结账</view>
                            </view>
                        </view>
                        <view class="closePopup">
                            <button @click="instructionClose">我知道了</button>
                        </view>
                    </view>
                </uni-popup>
            </view>
        </view>
        <view class="footer">
            <view class="goods-carts">
                <uni-goods-nav :options="options" :fill="true" :button-group="customButtonGroup" @click="toShopCar"
                    @buttonClick="addToShopCart" />
            </view>
        </view>
    </view>
</template>

<script setup>
import CustomNavbar from '../../components/CustomNavbar/CustomNavbar.vue';
import { ref, computed, onMounted } from 'vue'
import { goodsDetail } from '@/api/detail'
import { onLoad } from '@dcloudio/uni-app'


const { safeAreaInsets } = uni.getSystemInfoSync();
const swiperItems = ref([])
const goodsId = ref()
const goodsPrice = ref()
const goodsTitle = ref()
const goodsPicture = ref()
const tempSkuList = ref()
const tempSpecList = ref()
const goodsDetailData = ref()
onLoad((options) => {
    goodsId.value = options.id
    goodsTitle.value = options.goodsTitle
    goodsPrice.value = options.goodsPrice
    goodsPicture.value = options.goodsPicture
    console.log(options)
})
onMounted(() => {
    goodsDetail(goodsId.value).then(res => {
        console.log(res)
        swiperItems.value = res.data.rotationImageUrl.map((item, index) => {
            return {
                imgURL: 'http://140.143.139.167' + item,
                id: index + 1
            }
        })
        tempSkuList.value = res.data.specificationsTable.map(item => {
            return {
                "_id": item.id,
                "goods_id": item.goodsId,
                "goods_name": item.specificationsName,
                "image": goodsPicture.value,
                "price": item.specificationsPreferentialPrice * 100,
                "sku_name_arr": [item.specificationsName],
                "stock": item.specificationsInventory
            }
        })
        tempSpecList.value = res.data.specificationsTable.map(item => {
            return {
                name: item.specificationsName
            }
        })
        goodsDetailData.value = {
            "_id": goodsId.value,
            "name": goodsTitle.value,
            "goods_thumb": res.data.rotationImageUrl[0],
            "sku_list": tempSkuList.value,
            "spec_list": [{
                "list": tempSpecList.value,
                "name": "规格"
            }]
        }
    })
})

const customButtonGroup = ref([{
    text: '加入购物车',
    backgroundColor: 'linear-gradient(90deg,#337ecc,#79bbff)',
    color: '#ffffff'
}
])
const options = ref([{
    icon: 'cart',
    text: '购物车',
    info: 0
}])
const instructionPopup = ref()
const instructionOpen = () => {
    instructionPopup.value.open()
}
const instructionClose = () => {
    instructionPopup.value.close()
}
const servicePopup = ref()
const serviceOpen = () => {
    servicePopup.value.open()
}
const serviceClose = () => {
    servicePopup.value.close()
}
const addToShopCartSKU = ref({
    selectArr: []
})
const selectArrText = computed(() => {
    return addToShopCartSKU.value.selectArr.join(' ').trim() || "请选择规格"
})
const isShowSKU = ref(false)

const addToShopCart = () => {
    // options.value[0].info++
    isShowSKU.value = true
}
const handleAddCart = (e) => {
    console.log(e)
}
const toShopCar = () => {
    uni.switchTab({ url: '/pages/shopcart/shopcart' })
}
const current = ref()
const onPreviewImage = (url) => {
    uni.previewImage({
        urls: swiperItems.value.map(item => item.imgURL),
        current: url,
    })
}
const swiperChange = (e) => {
    current.value = e.detail.current
}
</script>

<style lang="scss">
page,
.root {
    background-color: #F2F3F5;
}

.container {
    .swiper-box {
        width: 750rpx;
        height: 750rpx;

        .swiper-item image {
            width: 750rpx;
            height: 750rpx;
        }
    }

    .goods-info {
        padding: 20rpx;
        background-color: #FFFFFF;

        .price {
            font-size: 40rpx;
            font-weight: bold;
            color: #cf4444;
            margin-bottom: 20rpx;
        }

        margin-bottom: 20rpx;
    }

    .service-box {
        margin-bottom: 20rpx;
        background-color: #FFFFFF;

        .service-item {
            display: flex;

            .item-name {
                padding: 20rpx;
                width: 100rpx;
                color: #909399;
            }

            .item-content {
                padding: 20rpx;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 650rpx;

                text {
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                }

                image {
                    width: 30rpx;
                    height: 30rpx;
                }
            }

            .servicePopup {

                border-radius: 20rpx 20rpx 0 0;
                background-color: #ffffff;

                .service-title {
                    padding-top: 20rpx;
                    text-align: center;
                }

                .service-content {
                    padding: 40rpx;
                    font-size: 28rpx;

                    .service-content-item {
                        .title {
                            margin-bottom: 20rpx;
                        }

                        .content {
                            color: #909399
                        }

                    }
                }

                .closePopup {
                    padding: 20rpx;

                    button {
                        color: #ffffff;
                        font-size: 28rpx;
                        border-radius: 200rpx;
                        background-color: #337ecc;
                        background-image: linear-gradient(90deg, #337ecc 0%, #79bbff 100%);
                    }
                }
            }

            .addToShopCartPopup {

                border-radius: 20rpx 20rpx 0 0;
                background-color: #ffffff;

                .addToShopCart-title {
                    padding-top: 20rpx;
                    text-align: center;
                }

                .addToShopCart-content {
                    padding: 40rpx;
                    font-size: 28rpx;

                    .addToShopCart-content-item {
                        .title {
                            margin-bottom: 20rpx;
                        }

                        .content {
                            color: #909399
                        }

                    }
                }

                .closePopup {
                    padding: 20rpx;

                    button {
                        color: #ffffff;
                        font-size: 28rpx;
                        border-radius: 200rpx;
                        background-color: #337ecc;
                        background-image: linear-gradient(90deg, #337ecc 0%, #79bbff 100%);
                    }
                }
            }
        }

    }
}

.instruction-box {
    padding-bottom: 120rpx;

    .instruction {
        background-color: #FFFFFF;

        .instruction-item {
            display: flex;

            .item-name {
                padding: 20rpx;
                width: 100rpx;
                color: #909399;
            }

            .item-content {
                padding: 20rpx;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 650rpx;

                text {
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                }

                image {
                    width: 25rpx;
                    height: 25rpx;
                }
            }
        }
    }



    .instructionPopup {

        border-radius: 20rpx 20rpx 0 0;
        background-color: #ffffff;

        .instruction-title {
            padding-top: 20rpx;
            text-align: center;
        }

        .instruction-content {
            padding: 40rpx;
            font-size: 28rpx;

            .instruction-content-item {
                .title {
                    margin-bottom: 20rpx;
                }

                .content {
                    color: #909399
                }

            }
        }

        .closePopup {
            padding: 20rpx;

            button {
                color: #ffffff;
                font-size: 28rpx;
                border-radius: 200rpx;
                background-color: #337ecc;
                background-image: linear-gradient(90deg, #337ecc 0%, #79bbff 100%);
            }
        }
    }
}


.footer {
    .goods-carts {
        display: flex;
        flex-direction: column;
        position: fixed;
        left: 0;
        right: 0;
        left: var(--window-left);
        right: var(--window-right);
        bottom: 0;
    }
}
</style>
