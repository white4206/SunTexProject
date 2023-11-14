            <!-- <view class="selectCar">
                <uni-data-select v-model="value" :localdata="range" @change="change"></uni-data-select>
            </view> -->
<template>
    <CustomNavbar :title="title" />
    <view class="root">
        <view class="header" :style="{ marginTop: safeAreaInsets.top + 46 + 'px' }">
            <uni-search-bar class="search-input" radius="100" v-model="searchValue" cancelButton="none" :radius="5"
                placeholder="请输入搜索内容" bgColor="#ffffff" />
            <view class="option-bar">
                <text class="option-item" :class="{ active: currentIndex === 1 }" @tap="currentIndex = 1">默认</text>
                <view class="price-box option-item" :class="{ active: currentIndex === 2 }" @tap="handleSelected">
                    <text>价格</text>
                    <image class="price-sort-image" src="../../static/images/sort.png" mode="scaleToFill"
                        v-if="currentIndex !== 2" />
                    <image class="price-sort-image" src="../../static/images/ascending.png" mode="scaleToFill"
                        v-if="currentIndex === 2 && isAscending" />
                    <image class="price-sort-image" src="../../static/images/descending.png" mode="scaleToFill"
                        v-if="currentIndex === 2 && !isAscending" />
                </view>
                <text class="option-item" :class="{ active: currentIndex === 3 }" @tap="currentIndex = 3">最新</text>
            </view>
        </view>
        <view class="container">
            <view class="goods-list">
                <navigator class="goods-item" v-for="item in filterGoodsList" :key="item.id"
                    :url="`/pages/goodsDetail/goodsDetail?id=${item.id}&goodsTitle=${item.title}&goodsPrice=${item.price}&goodsPicture=${item.imgURL}`"
                    hover-class="none">
                    <view class="goods-image">
                        <image :src="item.imgURL" mode="scaleToFill" />
                    </view>
                    <view class="goods-detail">
                        <view class="goods-title"><text>{{ item.title }}</text></view>
                        <view class="goods-desc">{{ item.desc }}</view>
                        <view class="goods-price">{{ '￥' + item.price }}</view>
                    </view>
                </navigator>
            </view>
        </view>
    </view>
</template>
            
<script setup>
import CustomNavbar from '../../components/CustomNavbar/CustomNavbar.vue';
import { onLoad } from '@dcloudio/uni-app'
import { getCategory } from '@/api/membrane'
import { ref, onMounted, computed } from 'vue'

const { safeAreaInsets } = uni.getSystemInfoSync();

const title = ref()
const categoryId = ref()
const goodsList = ref([])
onLoad((options) => {
    title.value = options.title
    categoryId.value = options.categoryId
})

const getCategoryList = (id) => {
    getCategory(id).then(res => {
        console.log(res)
        goodsList.value = res.data.map(item => {
            return {
                imgURL: 'http://140.143.139.167' + item.headimage,
                id: item.id,
                price: parseInt(item.minprice),
                title: item.name,
                desc: item.desc || "加入购物车，到店安装..."
            }
        })
        console.log(goodsList.value)
    })
}
onMounted(() => {
    getCategoryList(categoryId.value)
})
const searchValue = ref()
const filterGoodsList = computed(() => {
    return goodsList.value.filter(
        (data) =>
            !searchValue.value ||
            data.title.toLowerCase().includes(searchValue.value.toLowerCase())
    )
})
const currentIndex = ref(1)
const isAscending = ref(false)
const handleSelected = () => {
    currentIndex.value = 2
    isAscending.value = !isAscending.value
    goodsList.value = goodsList.value.sort((start, next) => {
        if (isAscending.value)
            return start.price - next.price
        else
            return next.price - start.price
    })
}

</script>
            
<style lang="scss">
page,
.root {
    background-color: #F2F3F5;
}

.header {
    .option-bar {
        display: flex;
        justify-content: space-around;
        background-color: #ffffff;
        margin-bottom: 20rpx;

        .option-item {
            color: #909399;
            padding: 20rpx;
        }

        .active {
            color: #337ecc;
            font-weight: bold;
        }

        .price-box {
            display: flex;
            align-items: center;

            .price-sort-image {
                width: 30rpx;
                height: 30rpx;
            }
        }
    }
}

.container {
    .goods-list {
        background-color: #ffffff;

        .goods-item {
            display: flex;
            padding: 20rpx;

            .goods-image {
                image {
                    border-radius: 10rpx;
                    width: 300rpx;
                    height: 300rpx;
                }
            }

            .goods-detail {
                padding: 20rpx;

                .goods-title {
                    font-weight: bold;
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    margin-bottom: 20rpx;
                }

                .goods-desc {
                    font-size: 24rpx;
                    color: #909399;
                    height: 100rpx;
                }

                .goods-price {
                    color: #cf4444;
                }
            }

        }
    }
}
</style>