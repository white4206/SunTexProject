<template>
	<CustomNavBar />
	<view class="root">
		<view class="container" :style="{ marginTop: 2 * safeAreaInsets.top + 240 + 'rpx' }">
			<uni-swiper-dot mode="default" :current="current" :info="swiperItems">
				<swiper class="swiper-box" :autoplay="true" :interval="3000" :duration="1000" @change="swiperChange">
					<swiper-item v-for="item in swiperItems" :key="item.id">
						<view class="swiper-item">
							<image :src="'http://140.143.139.167'+item.imageUrl" mode="scaleToFill"></image>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>

			<view class="service-list">
				<view class="membranes-area">
					<view class="title"><uni-title type="h3" title="膜类专区"></uni-title></view>
					<view class="membranes">
						<navigator class="membrane-item" v-for="item in membraneItems" :key="item.id"
							:url="`/pages/membraneCategory/membraneCategory?title=${item.title}&kindname=${item.kindname}`"
							hover-class="none">
							<view class="membrane-item-image">
								<image :src="item.imgURL" mode="scaleToFill" />
							</view>
							<text>{{ item.title }}</text>
						</navigator>
					</view>
				</view>
				<view class="carService-area">
					<view class="carServiceItems">
						<view class="title"><uni-title type="h3" title="汽车服务专区"></uni-title></view>
						<view class="carServiceItem">
							<navigator class="carServiceItem-content" :url="item.navigator + `&kindname=${item.kindname}`"
								v-for="item in  carServiceItems " :key="item.id" hover-class="none">
								<view class="content-image">
									<image :src="item.imgURL" mode="scaleToFill" />
								</view>
								<text class="content-text">{{ item.title }}</text>
							</navigator>
						</view>
						<!-- <view class="carService-image">
							<image src="http://8.130.22.97:8080/images/tesla.jpg" mode="scaleToFill" />
						</view> -->
						<!-- <view class="carServiceItems-btn">
							<view class="carServiceItems-btn-text">开启“新”的旅程</view>
							<navigator :url="``" hover-class="none">
								<button size="mini">前往专区</button>
							</navigator>
						</view> -->
					</view>
					<view class="title"><uni-title type="h3" title=""></uni-title></view>
				</view>
				<!-- <view class="update-area">
					<view class="title"><uni-title type="h2" title="原厂改装专区"></uni-title></view>
					<view class="update-item">
						<image src="../../static/images/maintenance.png" mode="widthFix" />
						<view class="update-item-btn">
							<view class="update-item-btn-text">更多详情</view>
							<navigator :url="``" hover-class="none">
								<button size="mini">前往专区</button>
							</navigator>
						</view>
					</view>
				</view>
				<view class="maintenance-area">
					<view class="title"><uni-title type="h2" title="维修保养专区"></uni-title></view>
					<view class="maintenance-item">
						<image src="../../static/images/maintenance.png" mode="widthFix" />
						<view class="maintenance-item-btn">
							<view class="maintenance-item-btn-text">更多详情</view>
							<navigator :url="``" hover-class="none">
								<button size="mini">前往专区</button>
							</navigator>
						</view>
					</view>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script setup>
import CustomNavBar from './components/CustomNavbar'
import { swiperImg } from '@/api/home';
import { ref, onMounted } from 'vue'

const { safeAreaInsets } = uni.getSystemInfoSync();
const swiperItems = ref()
const getSwiperImg = () => {
	swiperImg().then(res => {
		console.log(res)
		swiperItems.value = res.data
	})
}
const current = ref()
const membraneItems = ref([
	{ title: "窗膜", imgURL: "../../static/images/fenestratedMembrane.png", id: 1, kindname: "WindowFilm" },
	{ title: "漆面保护膜", imgURL: "../../static/images/lacquerProtectiveMembrane.png", id: 2, kindname: "LacquerProtectiveFilm" },
	{ title: "改色膜", imgURL: "../../static/images/colorChangeMembrane.png", id: 3, kindname: "ColorChangeFilm" },
	{ title: "家居膜", imgURL: "../../static/images/homeProtectorMembrane.png", id: 4, kindname: "HomeScreenProtector" },
])
const carServiceItems = ref([
	{ title: "新能源专区", imgURL: "../../static/images/maintenance.png", id: 1, navigator: "/pages/updateCategory/updateCategory?title=新能源专区", kindname: "NewEnergyZone" },
	{ title: "原厂改装专区", imgURL: "../../static/images/maintenance.png", id: 2, navigator: "/pages/updateCategory/updateCategory?title=原厂改装专区", kindname: "OriginalModificationArea" },
	{ title: "维修保养专区", imgURL: "../../static/images/maintenance.png", id: 3, navigator: "/pages/maintenancePage/maintenancePage?title=维修保养专区", kindname: "MaintenanceArea" },
])
const swiperChange = (e) => {
	current.value = e.detail.current
}
onMounted(() => {
	getSwiperImg()
})
</script>

<style lang="scss">
page,
.root {
	background-color: #F2F3F5;

	.container {
		.swiper-box {
			margin-top: 20rpx;
			width: 750rpx;
			height: 300rpx;
			border-radius: 30rpx;

			.swiper-item {
				text-align: center;
			}

			.swiper-item image {
				border-radius: 30rpx;
				width: 710rpx;
				height: 300rpx;

			}
		}
	}

	.service-list {
		margin: 50rpx 20rpx;

		.membranes-area {
			padding: 20rpx;
			border-radius: 20rpx;
			background-color: #ffffff;
			margin-bottom: 20rpx;
			box-shadow: 0 0 20rpx 0 rgba(0, 0, 0, 0.1);

			.title {
				margin-bottom: 20rpx;
			}

			.membranes {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;

				.membrane-item {
					flex: 0 0 25%;
					text-align: center;
					font-size: 28rpx;

					.membrane-item-image {
						image {
							border-radius: 20rpx;
							width: 100rpx;
							height: 100rpx;
						}
					}
				}
			}

		}

		.carService-area {
			margin-bottom: 50rpx;
			background-color: #337ecc;
			background-image: linear-gradient(90deg, #337ecc 0%, #79bbff 100%);
			border-radius: 20rpx;
			box-shadow: 0 0 20rpx 0 rgba(0, 0, 0, 0.1);

			.carServiceItems {
				border-radius: 20rpx;
				background-color: #ffffff;
				padding: 20rpx;

				.title {
					margin-bottom: 20rpx;
				}

				.carServiceItem {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-around;

					.carServiceItem-content {
						flex: 0 0 30%;
						text-align: center;

						.content-image {
							image {
								border-radius: 20rpx;
								width: 100rpx;
								height: 100rpx;
							}
						}
					}

					.content-text {
						font-size: 28rpx;
					}

				}
			}
		}

		// .update-area {
		// 	margin-bottom: 20rpx;

		// 	.title {
		// 		border-radius: 10rpx 200rpx 0rpx 0;
		// 		padding-left: 20rpx;
		// 		width: 300rpx;
		// 		background-color: #ffffff;
		// 	}

		// 	.update-item {
		// 		padding: 20rpx;
		// 		border-radius: 0 20rpx 20rpx 20rpx;
		// 		background-color: #ffffff;
		// 		display: flex;
		// 		align-items: center;

		// 		.update-item-btn {
		// 			margin: 0 auto;
		// 			text-align: center;

		// 			.update-item-btn-text {
		// 				font-size: 24rpx;
		// 				color: #A8ABB2;
		// 				margin-bottom: 10rpx;
		// 			}

		// 			button {
		// 				background-color: #337ecc;
		// 				background-image: linear-gradient(90deg, #337ecc 0%, #79bbff 100%);
		// 			}
		// 		}

		// 		image {
		// 			width: 250rpx;
		// 		}
		// 	}
		// }

		// .maintenance-area {
		// 	padding-bottom: 20rpx;

		// 	.title {
		// 		border-radius: 10rpx 200rpx 0rpx 0;
		// 		padding-left: 20rpx;
		// 		width: 300rpx;
		// 		background-color: #ffffff;
		// 	}

		// 	.maintenance-item {
		// 		padding: 40rpx;
		// 		border-radius: 0 20rpx 20rpx 20rpx;
		// 		background-color: #ffffff;
		// 		display: flex;
		// 		align-items: center;

		// 		.maintenance-item-btn {
		// 			margin: 0 auto;
		// 			text-align: center;

		// 			.maintenance-item-btn-text {
		// 				font-size: 24rpx;
		// 				color: #A8ABB2;
		// 				margin-bottom: 10rpx;
		// 			}

		// 			button {
		// 				background-color: #337ecc;
		// 				background-image: linear-gradient(90deg, #337ecc 0%, #79bbff 100%);
		// 			}
		// 		}

		// 		image {
		// 			width: 250rpx;
		// 		}
		// 	}
		// }
	}
}
</style>