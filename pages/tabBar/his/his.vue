<template>
	<view>
		<view class="zzjz-his-top zzjz-bg-red">
			<view class="zzjz-his-top-a">收入|支出</view>
			<view class="zzjz-his-top-b">周|月|年</view>
		</view>
		<view class="zzjz-his-chart zzjz-bg-blue">
		</view>
		<view class="zzjz-his-list zzjz-bg-green">
			<view class="zzjz-his-list-c">1</view>
			<view class="zzjz-his-list-c">2</view>
			<view class="zzjz-his-list-c">3</view>
			<view class="zzjz-his-list-c">4</view>
			<view class="zzjz-his-list-c">5</view>
			<view class="zzjz-his-list-c">6</view>
			<view class="zzjz-his-list-c">7</view>
			<view class="zzjz-his-list-c">8</view>
			<view class="zzjz-his-list-c">9</view>
			<view class="zzjz-his-list-c">10</view>
			<view class="zzjz-his-list-c">11</view>
			<view class="zzjz-his-list-c">12</view>
			<view class="zzjz-his-list-c">13</view>
			<view class="zzjz-his-list-c">14</view>
			<view class="zzjz-his-list-c">15</view>
			<view class="zzjz-his-list-c">16</view>
			<view class="zzjz-his-list-c">17</view>
			<view class="zzjz-his-list-c">18</view>
			<view class="zzjz-his-list-c">19</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.zzjz-his-top {
		height: 100upx;
		width: 100%;
		position: fixed;
	}
	.zzjz-his-top-a {
		height: 100upx;
		width: 40%;
		display: inline-block;
	}
	.zzjz-his-top-b {
		height: 100upx;
		width: 60%;
		display: inline-block;
	}
	.zzjz-his-chart {
		height: 400upx;
		width: 100%;
		position: fixed;
		top: 100upx;
	}
	.zzjz-his-list {
		width: 100%;
		position: absolute;
		top: 500upx;
		z-index: -1;
	}
	.zzjz-his-list-c {
		height: 150upx;
		width: 100%;
	}
</style>
