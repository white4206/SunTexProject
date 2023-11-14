<template>
    <CustomNavbar title="案例详情" />
    <view class="root">
        <view class="container" :style="{ marginTop: safeAreaInsets.top + 46 + 'px' }">
            <view class="head">
                <uni-section :title="title" :sub-title="'预约电话:' + caseDetail.reservation" type="line"></uni-section>
                <uni-section titleColor="#cf4444" :title="'优惠价格:￥' + caseDetail.present"
                    :sub-title="'花费:￥' + caseDetail.original" type="pointer"></uni-section>
            </view>
            <view class="content">
                <uni-title type="h3" title="改装效果:"></uni-title>
                <view class="medium" v-for="item in caseImage" :key="item">
                    <image :src="'http://140.143.139.167' + item" mode="scaleToFill" />
                </view>
                <uni-title type="h3" title="详细信息:"></uni-title>
                <view class="text" v-html="caseDetail.introduce">
                </view>
            </view>
        </view>
    </view>
</template>

<script setup>
import CustomNavbar from '../../components/CustomNavbar/CustomNavbar.vue';
import { onLoad } from '@dcloudio/uni-app'
import { updateCaseDetail } from '@/api/case'
import { ref, onMounted } from 'vue'

const { safeAreaInsets } = uni.getSystemInfoSync();
const title = ref()
const id = ref()
onLoad((options) => {
    title.value = options.title
    id.value = options.id
    console.log(id.value)
})
const caseDetail = ref()
const caseImage = ref()
const getUpdateCaseDetail = (id) => {
    updateCaseDetail(id).then(res => {
        caseDetail.value = res.data.cases
        caseImage.value = res.data.imageUrl
    })
}
onMounted(() => {
    getUpdateCaseDetail(id.value)
})
</script>

<style lang="scss">
page,
.root {
    background-color: #F2F3F5;
}

.container {
    .head {
        border-radius: 20rpx;
        padding: 20rpx;
    }

    .content {
        margin: 20rpx;
        padding: 20rpx;
        border-radius: 20rpx;
        background-color: #ffffff;

        .medium {
            text-align: center;
        }
    }
}
</style>
