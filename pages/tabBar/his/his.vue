<template>
	<view>
		<view class="zzjz-his-top zzjz-bg-red">
			<view class="zzjz-his-top-a">收入|支出</view>
			<view class="zzjz-his-top-b">周|月|年</view>
		</view>
		<view class="zzjz-his-chart zzjz-bg-blue">
		</view>
		<ul class="zzjz-his-list zzjz-bg-green">
			<li class="zzjz-his-list-c">aaaa</li>
			<li class="zzjz-his-list-c">2</li>
			<li class="zzjz-his-list-c">3</li>
			<li class="zzjz-his-list-c">4</li>
			<li class="zzjz-his-list-c">5</li>
			<li class="zzjz-his-list-c">6</li>
			<li class="zzjz-his-list-c">7</li>
			<li class="zzjz-his-list-c">8</li>
			<li class="zzjz-his-list-c">9</li>
			<li class="zzjz-his-list-c">10</li>
			<li class="zzjz-his-list-c">11</li>
			<li class="zzjz-his-list-c">12</li>
			<li class="zzjz-his-list-c">13</li>
			<li class="zzjz-his-list-c">14</li>
			<li class="zzjz-his-list-c">15</li>
			<li class="zzjz-his-list-c">16</li>
			<li class="zzjz-his-list-c">17</li>
			<li class="zzjz-his-list-c">18</li>
			<li class="zzjz-his-list-c">19</li>
		</ul>
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
