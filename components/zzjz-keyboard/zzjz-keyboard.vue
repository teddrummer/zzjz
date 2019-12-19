<template>
	<uni-popup :custom="true" type="bottom" ref="zzjzKeyboard">
		<view class="keyboardbox">
			<view class="simple" v-if="type==='simple'">
				<view class="simpleAmount">金额:{{simpleAmount}}</view>
				<view class="simpleDes">备注:</view>
			</view>
			<view class="numkeyboard" v-if="type==='simple'">
				<view class="num-area">
					<view class="row" v-for="(item,index) in numKeybordList" :key="index">
						<view :class="['item',ite===0?'z':'',(disableDot && ite==='.')?'disabled':'']" v-for="(ite,idx) in item"
						 hover-class="active" :hover-start-time="0" :hover-stay-time="5" :key="idx" @tap="input(ite)">{{ite}}</view>
					</view>
				</view>
				<view class="btn-area">
					<view :class="['item','del']" hover-class="active" :hover-start-time="0" :hover-stay-time="5" @tap="deleteVal">
						删除
					</view>
					<view class="confirem item" hover-class="active" :hover-start-time="0" :hover-stay-time="5" @tap="confirm">
						完成
					</view>
				</view>
			</view>
		</view>
	</uni-popup>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components: {
			uniPopup
		},
		props: {
			type: {
				type: String,
				default: 'simple'
			},
			safeAreaInsetBottom: { //是否设置安全区
				type: Boolean,
				default: false
			},
			disableDot: { //数字键盘是否禁止点击.仅type为simple生效
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				numKeybordList: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[0, '.']
				],
				active: 1,
				simpleAmountList: []
			};
		},
		methods: {
			open() {
				this.$refs.zzjzKeyboard.open();
			},
			confirm() {
				this.$emit('onConfirm');
				this.close();
			},
			deleteVal() {
				switch (this.type){
					case 'simple':
						this.simpleAmountList.pop();
						break;
				}
			},
			input(val) {
				switch(this.type){
					case 'simple':
						this.simpleAmountList.push(val);
						break;
				}
			},
			close() {
				this.simpleAmountList = [];
				this.$refs.zzjzKeyboard.close();
			}
		},
		computed:{
			simpleAmount(){
				let str='';
				this.simpleAmountList.forEach(item=>{
					str+=item.toString();
				})
				return str;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.keyboardbox {
		background-color: #FFFFFF;

		.infoArea {
			height: 120rpx;
			display: flex;
			background-color: #FFFFFF;
		}

		.numkeyboard {
			height: 432rpx;
			display: flex;
			background-color: #ebedf0;

			.btn-area {
				width: 180rpx;
				height: 100%;
				display: flex;
				flex-direction: column;

				.item {
					width: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-grow: 1;
				}

				.del {
					background-color: #ebedf0;
					color: #333;

					&.active {
						background-color: #f1f3f5;
					}
				}

				.confirem {
					background-color: #1989fa;
					color: #FFFFFF;

					&.active {
						background-color: #0570db;
					}
				}
			}

			.num-area {
				flex-grow: 1;
				display: flex;
				flex-wrap: wrap;

				.row {
					width: 100%;
					height: 25%;
					display: flex;
					margin-top: 1px;

					.item {
						flex-grow: 1;
						height: 100%;
						display: flex;
						justify-content: center;
						align-items: center;
						background-color: #FFFFFF;
						border-right: 1px solid #ebedf0;
						width: 33.33%;
						
						&.active {
							background-color: #ebedf0;
						}

						&.z {
							flex-grow: 2;
							width: 66.66%;
						}

						&.disabled {
							background: #FFFFFF;
							color: #B9B9B9;
						}
					}
				}

			}
		}
	}

	.safe-area {
		padding-bottom: 0rpx;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}

</style>
