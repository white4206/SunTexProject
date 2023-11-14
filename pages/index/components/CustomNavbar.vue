<template>
	<view class="custom-navbar"
		:style="{ paddingTop: safeAreaInsets.top + 'px', backgroundImage: 'url(http://8.130.22.97:8080/images/navbar_background.jpg)' }">
		<view class="title">
			<uni-title type="h1" title="圣科旗舰店"></uni-title>
		</view>
		<view class="search-box">
			<uni-search-bar class="search-input" @confirm="search" radius="100" v-model="searchValue" @input="input"
				bgColor="#ffffff" cancelButton="none" placeholder="请输入搜索内容" />
			<view class="search-btn"><button class="button" size="mini" round>搜索</button></view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue'
const { safeAreaInsets } = uni.getSystemInfoSync();

const searchValue = ref()
const search = () => {

}
const input = () => {

}
</script>

<style lang="scss">
.custom-navbar {
	position: fixed;
	top: 0;
	width: 750rpx;
	z-index: 9999;
	background-size: cover;
	height: 240rpx;

	.title {
		padding-left: 40rpx;
	}

	.search-box {
		margin-top: 40rpx;
		display: flex;
		align-items: center;

		.search-input {
			flex: 1;
		}

		.search-btn {
			padding: 20rpx;
			padding-left: 0;
			display: flex;
			align-items: center;

			.button {
				color: #ffffff;
				padding: 0 30rpx;
				height: 60rpx;
				line-height: 60rpx;
				font-size: 28rpx;
				background-color: #337ecc;
				background-image: linear-gradient(90deg, #337ecc 0%, #79bbff 100%);
				border-radius: 100rpx;
			}
		}

	}
}
</style>