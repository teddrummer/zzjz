<template>
	<view>
		<view class="zzjz-list-top zzjz-bg-red">
			<view class="zzjz-list-top-a">年月</view>
			<view class="zzjz-list-top-b">收入|支出</view>
		</view>
		<view class="zzjz-list-list zzjz-bg-blue">
			<view class="zzjz-list-list-c">
				<view class="zzjz-list-list-img zzjz-bg-red">
					11111
				</view>
				<view class="zzjz-list-list-info zzjz-bg-red">
					22222222222222
				</view>
				<view class="zzjz-list-list-amount zzjz-bg-red">
					33333
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
		width: 100vw;
		position: absolute;
		top: 150upx;
		z-index: -1;
	}
	.zzjz-list-list-c {
		padding: 10upx;
		height: 150upx;
		width: 100vw;
	}
	.zzjz-list-list-img {
		float: left;
		height: 130upx;
		width: 130upx;
		border: 1upx solid red;
	}
	.zzjz-list-list-info {
		float: left;
		height: 130upx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		border: 1upx solid red;
	}
	.zzjz-list-list-amount {
		float: right;
		height: 130upx;
		width: 130upx;
		border: 1upx solid red;
	}
</style>
