<template>
	<view>
		<view class="top zzjz-bg-blue">
			<view class="top-expenses zzjz-flex-grow-1 ">收入</view>
			<view class="top-income zzjz-flex-grow-1 ">支出</view>
		</view>
		<view class="form">
			<view class="form-type zzjz-bg-red">
				<image @tap="formTypeimgClick" @longtap="formTypeimgLongTap" class="form-typeimg zzjz-bg-green"></image>
				<image @tap="formTypeimgClick" @longtap="formTypeimgLongTap" class="form-typeimg zzjz-bg-green"></image>
				<image @tap="formTypeimgClick" @longtap="formTypeimgLongTap" class="form-typeimg zzjz-bg-green"></image>
				<image @tap="formTypeimgClick" @longtap="formTypeimgLongTap" class="form-typeimg zzjz-bg-green"></image>
				<image @tap="formTypeimgClick" @longtap="formTypeimgLongTap" class="form-typeimg zzjz-bg-green"></image>
				<image @tap="formTypeimgClick" @longtap="formTypeimgLongTap" class="form-typeimg zzjz-bg-green"></image>
				<image @tap="formTypeimgClick" @longtap="formTypeimgLongTap" class="form-typeimg zzjz-bg-green"></image>
				<image @tap="formTypeimgClick" @longtap="formTypeimgLongTap" class="form-typeimg zzjz-bg-green"></image>
				<image @tap="formTypeimgClick" @longtap="formTypeimgLongTap" class="form-typeimg zzjz-bg-green"></image>
				<image @tap="formTypeimgClick" @longtap="formTypeimgLongTap" class="form-typeimg zzjz-bg-green"></image>
				<image @tap="formTypeimgClick" @longtap="formTypeimgLongTap" class="form-typeimg zzjz-bg-green"></image>
				<image @tap="formTypeimgClick" @longtap="formTypeimgLongTap" class="form-typeimg zzjz-bg-green"></image>
				<image @tap="formTypeimgClick" @longtap="formTypeimgLongTap" class="form-typeimg zzjz-bg-green"></image>
				<image @tap="formTypeimgClick" @longtap="formTypeimgLongTap" class="form-typeimg zzjz-bg-green"></image>
				<image @tap="formTypeimgClick" @longtap="formTypeimgLongTap" class="form-typeimg zzjz-bg-green"></image>
				<image @tap="formTypeimgClick" @longtap="formTypeimgLongTap" class="form-typeimg zzjz-bg-green"></image>
				<i></i><i></i><i></i><i></i><i></i>
			</view>
		</view>
	</view>
</template>

<script>
	var longClick = false;
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			formTypeimgClick: function (e) {
				if (longClick) {
					console.log('longtap');
				} else{
					console.log('tap');
				}
				longClick = false;
			},
			formTypeimgLongTap: function (e) {
				longClick = true;
			}
		}
	}
	// Page({
	//   formTypeimgClick: function (e) {
	//     console.log('11111111');
	//   }
	// })
</script>

<style lang="scss">
	.top {
		height: 150upx;
		width: 100vw;
		position: fixed;
		display: flex;
		flex-flow: nowrap;
		justify-content: space-between;
		align-items: center;
	}
	.top-expenses .top-income {
		height: 150upx;
		font-size: 30upx;
	}
	.form {
	}
	.form-type {
		top: 150upx;
		width: 100vw;
		position: absolute;
		display: flex;
		flex-flow: wrap;
		justify-content: space-between;
		z-index: -1;
	}
	// .form-type:after {
	// 	content: '';
	// 	flex: auto;
	// }
	.form-type > i {
		width: 120upx;
		margin-right: 5upx;
	}
	.form-typeimg {
		height: 120upx;
		width: 120upx;
		margin: 10upx 5upx 0 5upx;
	}
	
</style>
