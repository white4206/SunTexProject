<template>
    <CustomNavbar :title="title" />
    <view class="root">
        <view class="container" :style="{ marginTop: safeAreaInsets.top + 46 + 'px' }">
            <view class="titleImage">
                <image src="../../static/images/maintenance.png" mode="scaleToFill" />
            </view>
            <view class="changerBar">
                <view class="bar">
                    <uni-segmented-control :current="current" :values="barItems" style-type="button" active-color="#337ecc"
                        @clickItem="onClickItem" />
                </view>
                <view class="content">
                    <view v-if="current === 0">
                        <navigator class="content-item" v-for="item in updateCases" :key="item.id"
                            :url="`/pages/updateCaseDetail/updateCaseDetail?title=${item.title}&id=${item.id}`">
                            <view class="title"><text>{{ item.title }}</text></view>
                            <view class="content-item-image-box">
                                <view class="content-item-image" v-for="(imgURL, index) in item.caseImage" :key="item">
                                    <image :src="'http://140.143.139.167' + imgURL" mode="scaleToFill" v-if="index < 3" />
                                </view>
                            </view>
                            <view class="content-item-options">
                                查看详情...
                            </view>
                        </navigator>
                    </view>
                    <view v-if="current === 1">
                        <view class="container">
                            <!-- 分类 -->
                            <view class="categories">
                                <!-- 左侧：一级分类 -->
                                <scroll-view class="primary" scroll-y>
                                    <view v-for="(item, index) in categoryList" :key="item.id" class="item"
                                        :class="{ active: index === activeIndex }" @tap="getUpdatePartList(item.id, index)">
                                        <text class="name">
                                            {{ item.name }}
                                        </text>
                                    </view>
                                </scroll-view>
                                <!-- 右侧：二级分类 -->
                                <scroll-view enable-back-to-top class="secondary" scroll-y>
                                    <!-- 内容区域 -->
                                    <view class="panel">
                                        <view class="title">
                                            <text class="name">配件列表</text>
                                        </view>
                                        <view class="section">
                                            <navigator class="goods-item" v-for="goods in subCategoryList" :key="goods.id"
                                                :url="`/pages/goodsDetail/goodsDetail?id=${goods.id}&goodsTitle=${goods.name}&goodsPrice=${goods.price}&goodsPicture=${goods.picture}`"
                                                hover-class="none">
                                                <view class="goods-image">
                                                    <image :src="goods.picture" mode="scaleToFill" />
                                                </view>
                                                <view class="goods-detail">
                                                    <view class="goods-title"><text>{{ goods.name }}</text></view>
                                                    <view class="goods-price">{{ '￥' + goods.price }}</view>
                                                </view>
                                            </navigator>
                                        </view>
                                    </view>
                                </scroll-view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup>
import CustomNavbar from '../../components/CustomNavbar/CustomNavbar.vue';
import { updateCase } from '@/api/case'
import { updatePartList, getCategory } from '@/api/update'
import { getKind } from '@/api/kind'
import { ref, onMounted } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

const { safeAreaInsets } = uni.getSystemInfoSync();
const title = ref()
const updateId = ref()
const categoryId = ref()
const barItems = ref(['案例', '改装'])
const current = ref(0)
onLoad((options) => {
    title.value = options.title
    updateId.value = options.updateId
})
const onClickItem = (e) => {
    current.value = e.currentIndex
}
const updateCases = ref()
const getUpdateCategory = () => {
    getKind("retrofitting").then(res => {
        if (res.data) {
            categoryList.value = res.data.map(item => {
                return {
                    name: item.sonKind,
                    id: item.id
                }
            })
            categoryId.value = categoryList.value[0].id
            getUpdatePartList(categoryList.value[0].id, 0)
        }
    })
}
const getUpdateCase = (id) => {
    updateCase(id).then(res => {
        if (res.data !== "无样例数据") {
            updateCases.value = res.data.map(item => {
                return {
                    title: item.title,
                    caseImage: item.imageUrl,
                    id: item.cases.id
                }
            })
        }
    })
}
const getUpdatePartList = (kindId, index) => {
    activeIndex.value = index
    categoryId.value = kindId
    getCategory(kindId).then(res => {
        tempSubCategoryList.value = res.data.map(item => {
            return {
                picture: 'http://140.143.139.167' + item.headimage,
                id: item.id,
                price: item.minprice || item.maxprice,
                name: item.name
            }
        })
        updatePartList(updateId.value).then(res => {
            subCategoryList.value = []
            res.data.forEach(item => {
                tempSubCategoryList.value.forEach(categoryItem => {
                    if (item.id === categoryItem.id)
                        subCategoryList.value.push(categoryItem)
                })
            })
        })
    })
}

onMounted(() => {
    getUpdateCase(updateId.value)
    getUpdateCategory()
})

// 获取分类列表数据
const categoryList = ref([])
const tempSubCategoryList = ref([])
const subCategoryList = ref([])
const activeIndex = ref(0)
</script>

<style lang="scss">
page,
.root {
    background-color: #F2F3F5;
}

.titleImage {
    padding: 20rpx;
    text-align: center;

    image {
        border-radius: 20rpx;
        width: 710rpx;
        height: 400rpx;
    }
}

.changerBar {
    .bar {
        padding: 20rpx;
    }

    .content {
        background-color: #FFFFFF;

        .content-item {
            border-bottom: 2rpx solid #F2F3F5;

            .title {
                padding: 20rpx 10rpx 0 10rpx;
                font-size: 28rpx;
                display: -webkit-flex;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
            }

            .content-item-image-box {
                display: flex;
                flex: 0 0 30%;
                flex-wrap: wrap;

                .content-item-image {
                    border-radius: 20rpx;
                    width: 250rpx;

                    image {
                        margin: 10rpx;
                        width: 230rpx;
                        height: 150rpx;
                        border-radius: 20rpx;
                    }
                }
            }
        }

        .content-item-options {
            padding: 0 20rpx;
            text-align: right;
            font-size: 28rpx;
            color: #A8ABB2;
        }
    }
}

.container {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

/* 分类 */
.categories {
    flex: 1;
    min-height: 600rpx;
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
        padding: 20rpx 0;

        .goods-item {
            display: flex;
            padding: 20rpx;

            .goods-image {
                image {
                    border-radius: 10rpx;
                    width: 200rpx;
                    height: 200rpx;
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
