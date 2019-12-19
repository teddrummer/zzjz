<template>
	<view>
		<view class="zzjz-list-top zzjz-bg-red">
			<view class="zzjz-list-top-a">年月</view>
			<view class="zzjz-list-top-b">收入|支出</view>
		</view>
		<view class="zzjz-list-list zzjz-bg-blue">
			<view class="zzjz-list-list-item" v-for="i in il">
				<view class="zzjz-list-list-item-day zzjz-bg-red">
					{{i.day}}
				</view>
				<view class="zzjz-list-list-item-list zzjz-bg-green" v-for="c in i.child">
					<view class="zzjz-list-list-item-list-img">
						{{c.type}}
					</view>
					<text class="zzjz-list-list-item-list-info zzjz-flex-grow-1">
						{{c.time}}
					</text>
					<text class="zzjz-list-list-item-list-amount">
						{{c.amount}}
					</text>
				</view>
			</view>
			<view class="zzjz-list-list-c">2</view>
			<view class="zzjz-list-list-c">3</view>
			<view class="zzjz-list-list-c">4</view>
			<view class="zzjz-list-list-c">5</view>
			<view class="zzjz-list-list-c">6</view>
			<view class="zzjz-list-list-c">7</view>
			<view class="zzjz-list-list-c">8</view>
			<view class="zzjz-list-list-c">9</view>
			<view class="zzjz-list-list-c">10</view>
			<view class="zzjz-list-list-c">11</view>
			<view class="zzjz-list-list-c">12</view>
			<view class="zzjz-list-list-c">13</view>
			<view class="zzjz-list-list-c">14</view>
			<view class="zzjz-list-list-c">15</view>
			<view class="zzjz-list-list-c">16</view>
			<view class="zzjz-list-list-c">17</view>
			<view class="zzjz-list-list-c">18</view>
			<view class="zzjz-list-list-c">19</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				il : [{"day":"12月01日","amount":123456,"child":[{"type":"food","amount":123,"time":"12:45:32"},{"type":"food","amount":123,"time":"12:45:32"},{"type":"food","amount":123,"time":"12:45:32"},{"type":"food","amount":123,"time":"12:45:32"}]},{"day":"12月02日","amount":46789,"child":[{"type":"food","amount":456,"time":"12:45:32"},{"type":"food","amount":456,"time":"12:45:32"},{"type":"food","amount":456,"time":"12:45:32"},{"type":"food","amount":123,"time":"12:45:32"}]}]
			}
		}
	}
</script>

<style lang="scss">
	.zzjz-list-top {
		height: 150upx;
		width: 100vw;
		position: fixed;
	}
	.zzjz-list-top-a {
		height: 150upx;
		width: 30vw;
		display: inline-block;
	}
	.zzjz-list-top-b {
		height: 150upx;
		width: 70vw;
		display: inline-block;
	}
	.zzjz-list-list {
		top: 150upx;
		width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		position: absolute;
		z-index: -1;
	}
	.zzjz-list-list-item {
		padding: 10upx;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
	.zzjz-list-list-item-day {
		height: 30upx;
		font-size: 18upx;
	}
	.zzjz-list-list-item-list {
		height: 100upx;
		display: flex;
		flex-flow: nowrap;
		justify-content: space-between;
		align-items: center;
	}
	.zzjz-list-list-item-list-img {
		float: left;
		height: 100upx;
		width: 100upx;
	}
	.zzjz-list-list-item-list-info {
		height: 100upx;
		border:1px solid #F00;
	}
	.zzjz-list-list-item-list-amount {
		height: 100upx;
		width: 200upx;
		text-align: right;
		border:1px solid #F00;
	}
</style>
