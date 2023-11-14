<template>
	<view class="custom-navbar" :style="{ paddingTop: safeAreaInsets.top + 6 + 'px' }">
		<view class="back-box">
			<view class="back" @tap="handleBack">
				<image class="back-image" src="../../static/images/back.png" mode="widthFix" />
			</view>
			<view class="divider"></view>
			<view class="backHome" @tap="handleBackHome">
				<image class="backHome-image" src="../../static/images/backhome.png" mode="widthFix" />
			</view>
		</view>
		<view class="title">
			{{ title }}
		</view>
	</view>
</template>

<script setup>
const { safeAreaInsets } = uni.getSystemInfoSync();
const props = defineProps({
	title: {
		type: String
	}
})
const handleBack = () => {
	uni.navigateBack({ delta: 1 })
}
const handleBackHome = () => [
	uni.switchTab({ url: '/pages/index/index' })

]
</script>

<style lang="scss">
.custom-navbar {
	position: fixed;
	top: 0;
	z-index: 9999;
	width: 100%;
	background-color: #ffffff;
	display: flex;
	height: 30px;
	padding-bottom: 10px;

	.back-box {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 10px;
		margin-right: 10px;
		background-color: rgba(255, 255, 255, .6);
		border: 1px solid rgba(0, 0, 0, .1);
		height: 30px;
		width: 85px;
		border-radius: 20px;

		.back {
			display: flex;
			align-items: center;

			.back-image {
				width: 20px;
			}
		}

		.divider {
			margin: 0 10px;
			width: 1px;
			height: 18px;
			background-color: rgba(0, 0, 0, .3);
		}

		.backHome {
			display: flex;
			align-items: center;

			.backHome-image {
				width: 20px;
			}
		}
	}

	.title {
		display: flex;
		align-items: center;
	}
}
</style>