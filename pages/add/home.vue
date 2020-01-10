<template>
	<view>
		<view class="top zzjz-bg-blue">
			<view class="top-expenses zzjz-flex-grow-1 ">收入</view>
			<view class="top-income zzjz-flex-grow-1 ">支出</view>
		</view>
		<view class="form">
			<view class="form-type zzjz-bg-red light">
				<image @tap="formTypeimgClick" @longtap="formTypeimgLongTap" class="form-typeimg zi_canyin"></image>
				<image @tap="formTypeimgClick" @longtap="formTypeimgLongTap" class="form-typeimg zi_fushi"></image>
				<image @tap="formTypeimgClick" @longtap="formTypeimgLongTap" class="form-typeimg zi_gouwu"></image>
				<image @tap="formTypeimgClick" @longtap="formTypeimgLongTap" class="form-typeimg zi_jiaotong"></image>
				<image @tap="formTypeimgClick" @longtap="formTypeimgLongTap" class="form-typeimg zi_yule"></image>
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
		
		<!-- 数字键盘 -->
		<zzjz-keyboard ref="simple" @onConfirm="onConfirm" :disableDot="true"/>
		
	</view>
</template>

<script>
	import zzjzKeyboard from "@/components/zzjz-keyboard/zzjz-keyboard.vue"
	var longClick = false;
	export default {
		components: {
			zzjzKeyboard,
		},
		data() {
			return {
				type:'',
				inputType:'simple'
			}
		},
		methods: {
			formTypeimgClick: function (e) {
				if (longClick) {
					console.log('longtap');
				} else{
					console.log('tap');
					this.type='simple';
					this.$refs['simple'].open();
				}
				longClick = false;
			},
			formTypeimgLongTap: function (e) {
				longClick = true;
			},
			onConfirm: function (e) {
				console.log(this.$refs[this.type].simpleAmount);
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
