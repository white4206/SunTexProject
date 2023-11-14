<template>
    <CustomNavbar :title="title + '分类'" />
    <view class="container" :style="{ marginTop: safeAreaInsets.top + 46 + 'px' }">
        <uni-search-bar radius="5" placeholder="搜索车型" clearButton="auto" cancelButton="none" v-model="searchValue" />
        <!-- 分类 -->
        <view class="categories">
            <!-- 左侧：一级分类 -->
            <scroll-view class="primary" scroll-y>
                <view v-for="(item, index) in categoryList" :key="item.id" class="item"
                    :class="{ active: index === activeIndex }" @tap="getSubCategoryList(item.id, index)">
                    <text class=" name">
                        {{ item.name }}
                    </text>
                </view>
            </scroll-view>
            <!-- 右侧：二级分类 -->
            <scroll-view enable-back-to-top class="secondary" scroll-y>
                <!-- 内容区域 -->
                <view class="panel">
                    <view class="title">
                        <text class="name">商品列表</text>
                        <navigator class="more" hover-class="none"
                            :url="`/pages/membraneGoods/membraneGoods?categoryId=${categoryId}`">全部
                        </navigator>
                    </view>
                    <view class="section">
                        <navigator v-for="goods in filterSubCategoryList" :key="goods.id" class="goods" hover-class="none"
                            :url="`/pages/goodsDetail/goodsDetail?id=${goods.id}&goodsTitle=${goods.name}&goodsPrice=${goods.price}&goodsPicture=${goods.picture}`">
                            <image class="image" :src="goods.picture"></image>
                            <view class="name ellipsis">{{ goods.name }}</view>
                            <view class="price">
                                <text class="symbol">¥</text>
                                <text class="number">{{ goods.price }}</text>
                            </view>
                        </navigator>
                    </view>
                </view>
            </scroll-view>
        </view>
    </view>
</template>
<script setup >
import CustomNavbar from '../../components/CustomNavbar/CustomNavbar.vue';
import { onLoad } from '@dcloudio/uni-app'
import { getCategory } from '@/api/membrane'
import { getKind } from '@/api/kind'
import { ref, onMounted, computed } from 'vue'

const { safeAreaInsets } = uni.getSystemInfoSync();


const activeIndex = ref(0)
const title = ref()
const kindname = ref()
const categoryId = ref()
onLoad((options) => {
    title.value = options.title
    kindname.value = options.kindname
})
const categoryList = ref([])
const subCategoryList = ref([])
// 获取分类列表数据
const getCategoryList = () => {
    getKind(kindname.value).then(res => {
        if (res.data) {
            console.log(res)
            categoryList.value = res.data.map(item => {
                return {
                    name: item.sonKind,
                    id: item.id
                }
            })
            categoryId.value = categoryList.value[0].id
            getSubCategoryList(categoryList.value[0].id, 0)
        }
    })
}
const getSubCategoryList = (id, index) => {
    console.log(id, index)
    activeIndex.value = index
    categoryId.value = id
    getCategory(id).then(res => {
        console.log(res)
        subCategoryList.value = res.data.map(item => {
            return {
                picture: 'http://140.143.139.167' + item.headimage,
                id: item.id,
                price: item.minprice || item.maxprice,
                name: item.name
            }
        })
        console.log(subCategoryList.value)
    })
}
const searchValue = ref()
const filterSubCategoryList = computed(() => {
    return subCategoryList.value.filter(
        (data) =>
            !searchValue.value ||
            data.name.toLowerCase().includes(searchValue.value.toLowerCase())
    )
})
onMounted(() => {
    getCategoryList()
})
</script>
<style lang="scss">
page {
    height: 100%;
    overflow: hidden;
}

.container {
    height: 100%;
    display: flex;
    flex-direction: column;
}

/* 分类 */
.categories {
    flex: 1;
    min-height: 400rpx;
    display: flex;
}

/* 一级分类 */
.primary {
    overflow: hidden;
    width: 180rpx;
    flex: none;
    background-color: #f6f6f6;

    .item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 96rpx;
        font-size: 26rpx;
        color: #595c63;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            left: 42rpx;
            bottom: 0;
            width: 96rpx;
            border-top: 1rpx solid #e3e4e7;
        }
    }

    .active {
        background-color: #fff;

        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 8rpx;
            height: 100%;
            background-color: #337ecc;
        }
    }
}

.primary .item:last-child::after,
.primary .active::after {
    display: none;
}

/* 二级分类 */
.secondary {
    background-color: #fff;

    .carousel {
        height: 200rpx;
        margin: 0 30rpx 20rpx;
        border-radius: 4rpx;
        overflow: hidden;
    }

    .panel {
        margin: 0 30rpx 0rpx;
    }

    .title {
        height: 60rpx;
        line-height: 60rpx;
        color: #333;
        font-size: 28rpx;
        border-bottom: 1rpx solid #f7f7f8;

        .more {
            float: right;
            padding-left: 20rpx;
            font-size: 24rpx;
            color: #999;
        }
    }

    .more {
        &::after {
            font-family: 'erabbit' !important;
            content: ' >';
        }
    }

    .section {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 20rpx 0;

        .goods {
            width: 150rpx;
            margin: 0rpx 20rpx 20rpx 0;

            &:nth-child(3n) {
                margin-right: 0;
            }

            .image {
                width: 150rpx;
                height: 150rpx;
            }

            .name {
                padding: 5rpx;
                font-size: 22rpx;
                color: #333;
            }

            .price {
                padding: 5rpx;
                font-size: 18rpx;
                color: #cf4444;
            }

            .number {
                font-size: 24rpx;
                margin-left: 2rpx;
            }
        }
    }
}
</style>
