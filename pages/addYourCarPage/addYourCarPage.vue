<template>
	<!-- <CustomNavbar title="添加车辆" /> -->
	<view class="root">
		<view class="container">
			<uni-indexed-list v-if="isSelect" :options="brandList" :show-select="false" @click="bindClick" />
			<uni-popup ref="selectPopup" type="right">
				<view class="selectPopup">
					<view class="title">
						<text>请选择款型</text>
					</view>
					<uni-data-picker placeholder="请选择款型" popup-title="请选择款型" :localdata="dataTree" v-model="select"
						@change="onchange" @nodeclick="onnodeclick" @popupopened="onpopupopened"
						@popupclosed="onpopupclosed">
					</uni-data-picker>
					<view class="btn">
						<button size="mini" @click="handleSelect">确认选择</button>
					</view>
				</view>
			</uni-popup>
			<view class="myCar-box" v-if="!isSelect">
				<view class="myCar-card" v-for="item in 3" :key="item">
					<uni-card :thumbnail="avatar" title="我的车" sub-title="2022款 1-8T 自动挡">
						<view class="options">
							<view class="optionItem">
								<button class="optionItem-btn" v-if="isDefault" size="mini">设为默认</button>
								<button v-else size="mini" :disabled="true">已设为默认</button>
							</view>
							<view class="optionItem">
								<button class="optionItem-btn" size="mini">删除</button>
							</view>
						</view>
					</uni-card>
				</view>
			</view>
		</view>
	</view>
</template>


<script setup>
// const { safeAreaInsets } = uni.getSystemInfoSync();
import { carBrandList, selectBrand } from '@/api/car';
import { ref, onMounted } from 'vue'

const select = ref()
const isSelect = ref(true)
const handleSelect = () => {
	isSelect.value = false
	selectPopup.value.close()
}
const search = ref()
const brandList = ref([])
const getCarBrand = () => {
	carBrandList().then(res => {
		console.log(res)
		let tempObjet = []
		let tempObjetOther = {}
		for (let i = 0; i < 26; i++) {
			tempObjet[i] = {}
		}
		let tempArray = {}
		let tempArrayOther = []
		for (let i = 0; i < 26; i++) {
			let temp = "tempArray" + String.fromCharCode(65 + i)
			tempArray[temp] = []
		}
		res.data.forEach(item => {

			if (item.remark === 'A') {
				tempArray.tempArrayA.push(item.dictLabel)
				tempObjet[0] = {
					letter: item.remark,
					data: tempArray.tempArrayA,
					code: item.dictCode
				}
			} else if (item.remark === 'B') {
				tempArray.tempArrayB.push(item.dictLabel)
				tempObjet[1] = {
					letter: item.remark,
					data: tempArray.tempArrayB,
					code: item.dictCode
				}
			} else if (item.remark === 'C') {
				tempArray.tempArrayC.push(item.dictLabel)
				tempObjet[2] = {
					letter: item.remark,
					data: tempArray.tempArrayC,
					code: item.dictCode
				}
			} else if (item.remark === 'D') {
				tempArray.tempArrayD.push(item.dictLabel)
				tempObjet[3] = {
					letter: item.remark,
					data: tempArray.tempArrayD,
					code: item.dictCode
				}
			} else if (item.remark === 'E') {
				tempArray.tempArrayE.push(item.dictLabel)
				tempObjet[4] = {
					letter: item.remark,
					data: tempArray.tempArrayE,
					code: item.dictCode
				}
			} else if (item.remark === 'F') {
				tempArray.tempArrayF.push(item.dictLabel)
				tempObjet[5] = {
					letter: item.remark,
					data: tempArray.tempArrayF,
					code: item.dictCode
				}
			} else if (item.remark === 'G') {
				tempArray.tempArrayG.push(item.dictLabel)
				tempObjet[6] = {
					letter: item.remark,
					data: tempArray.tempArrayG,
					code: item.dictCode
				}
			} else if (item.remark === 'H') {
				tempArray.tempArrayH.push(item.dictLabel)
				tempObjet[7] = {
					letter: item.remark,
					data: tempArray.tempArrayH,
					code: item.dictCode
				}
			} else if (item.remark === 'I') {
				tempArray.tempArrayI.push(item.dictLabel)
				tempObjet[8] = {
					letter: item.remark,
					data: tempArray.tempArrayI,
					code: item.dictCode
				}
			} else if (item.remark === 'J') {
				tempArray.tempArrayJ.push(item.dictLabel)
				tempObjet[9] = {
					letter: item.remark,
					data: tempArray.tempArrayJ,
					code: item.dictCode
				}
			} else if (item.remark === 'K') {
				tempArray.tempArrayK.push(item.dictLabel)
				tempObjet[10] = {
					letter: item.remark,
					data: tempArray.tempArrayK,
					code: item.dictCode
				}
			} else if (item.remark === 'L') {
				tempArray.tempArrayL.push(item.dictLabel)
				tempObjet[11] = {
					letter: item.remark,
					data: tempArray.tempArrayL,
					code: item.dictCode
				}
			} else if (item.remark === 'M') {
				tempArray.tempArrayM.push(item.dictLabel)
				tempObjet[12] = {
					letter: item.remark,
					data: tempArray.tempArrayM,
					code: item.dictCode
				}
			} else if (item.remark === 'N') {
				tempArray.tempArrayN.push(item.dictLabel)
				tempObjet[13] = {
					letter: item.remark,
					data: tempArray.tempArrayN,
					code: item.dictCode
				}
			} else if (item.remark === 'O') {
				tempArray.tempArrayO.push(item.dictLabel)
				tempObjet[14] = {
					letter: item.remark,
					data: tempArray.tempArrayO,
					code: item.dictCode
				}
			} else if (item.remark === 'P') {
				tempArray.tempArrayP.push(item.dictLabel)
				tempObjet[15] = {
					letter: item.remark,
					data: tempArray.tempArrayP,
					code: item.dictCode
				}
			} else if (item.remark === 'Q') {
				tempArray.tempArrayQ.push(item.dictLabel)
				tempObjet[16] = {
					letter: item.remark,
					data: tempArray.tempArrayQ,
					code: item.dictCode
				}
			} else if (item.remark === 'R') {
				tempArray.tempArrayR.push(item.dictLabel)
				tempObjet[17] = {
					letter: item.remark,
					data: tempArray.tempArrayR,
					code: item.dictCode
				}
			} else if (item.remark === 'S') {
				tempArray.tempArrayS.push(item.dictLabel)
				tempObjet[18] = {
					letter: item.remark,
					data: tempArray.tempArrayS,
					code: item.dictCode
				}
			} else if (item.remark === 'T') {
				tempArray.tempArrayT.push(item.dictLabel)
				tempObjet[19] = {
					letter: item.remark,
					data: tempArray.tempArrayT,
					code: item.dictCode
				}
			} else if (item.remark === 'U') {
				tempArray.tempArrayU.push(item.dictLabel)
				tempObjet[20] = {
					letter: item.remark,
					data: tempArray.tempArrayU,
					code: item.dictCode
				}
			} else if (item.remark === 'V') {
				tempArray.tempArrayV.push(item.dictLabel)
				tempObjet[21] = {
					letter: item.remark,
					data: tempArray.tempArrayV,
					code: item.dictCode
				}
			} else if (item.remark === 'W') {
				tempArray.tempArrayW.push(item.dictLabel)
				tempObjet[22] = {
					letter: item.remark,
					data: tempArray.tempArrayW,
					code: item.dictCode
				}
			} else if (item.remark === 'X') {
				tempArray.tempArrayX.push(item.dictLabel)
				tempObjet[23] = {
					letter: item.remark,
					data: tempArray.tempArrayX,
					code: item.dictCode
				}
			} else if (item.remark === 'Y') {
				tempArray.tempArrayY.push(item.dictLabel)
				tempObjet[24] = {
					letter: item.remark,
					data: tempArray.tempArrayY,
					code: item.dictCode
				}
			} else if (item.remark === 'Z') {
				tempArray.tempArrayZ.push(item.dictLabel)
				tempObjet[25] = {
					letter: item.remark,
					data: tempArray.tempArrayZ,
					code: item.dictCode
				}
			} else {
				tempArrayOther.push(item.dictLabel)
				tempObjetOther = {
					letter: item.remark,
					data: tempArrayOther,
					code: item.dictCode
				}
			}
		})
		tempObjet = tempObjet.filter(value => Object.keys(value).length != 0);
		tempObjet.map(item => {
			brandList.value.push(item)
		})
		if (JSON.stringify(tempObjetOther) !== '{}') {
			brandList.value.push(tempObjetOther)
		}
	})
}
const getCar = (brandName) => {
	selectBrand(brandName).then(res => console.log(res))
}
onMounted(() => {
	getCarBrand()
})
const myCars = ref()
const dataTree = ref([{
	text: "A6",
	value: "A6",
	children: [{
		text: "发动机排量1.8T",
		value: "1.8T",
		children: [{
			text: "2001年生产",
			value: "2001",
			children: [{
				text: "2001款 1.8T 自动",
				value: "2001-1.8T-auto"
			}]
		}]
	},
	{
		text: "发动机排量1.9T",
		value: "1.9T"
	}]
},
{
	text: "A7",
	value: "A7",
	children: [{
		text: "发动机排量1.8T",
		value: "1.8T"
	},
	{
		text: "发动机排量1.9T",
		value: "1.9T"
	}]
},
{
	text: "A8",
	value: "A8",
	disable: true
}])
const onnodeclick = (e) => {
	console.log(e);
}
const onpopupopened = (e) => {
	console.log('popupopened')
}
const onpopupclosed = (e) => {
	console.log('popupclosed');
}
const onchange = (e) => {
	console.log(e)
}

const selectPopup = ref()
const bindClick = (e) => {
	console.log(e)
	getCar(e.item.name)
	selectPopup.value.open()
}
</script>

<style lang="scss">
page,
.root {
	background-color: #f2f3f5;
}

.selectPopup {
	padding: 20rpx;
	height: 100%;
	width: 560rpx;
	background-color: #ffffff;

	.title {
		text-align: center;
		margin-bottom: 20rpx;
	}

	.btn {
		margin: 20rpx 0;
		text-align: center;

		button {
			background-color: #337ecc;
			background-image: linear-gradient(90deg, #337ecc 0%, #79bbff 100%);
		}
	}
}

.myCar-box {
	padding-top: 20rpx;

	.myCar-card {
		.options {
			display: flex;
			justify-content: space-around;

			.optionItem {
				.optionItem-btn {
					background-color: #337ecc;
					background-image: linear-gradient(90deg, #337ecc 0%, #79bbff 100%);
				}
			}
		}
	}
}
</style>