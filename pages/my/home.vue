<template>
	<view>
		<view class="zzjz-my-top zzjz-bg-red">
			<view class="zzjz-my-top-a">头像</view>
			<view class="zzjz-my-top-b">个人统计</view>
		</view>
		<view class="zzjz-my-menu zzjz-bg-blue">
		</view>
		<view class="zzjz-my-about zzjz-bg-green">
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.zzjz-my-top {
		height: 300upx;
		width: 100%;
		position: fixed;
	}
	.zzjz-my-top-a {
		height: 200upx;
		width: 100%;
		display: absolute;
	}
	.zzjz-my-top-b {
		height: 100upx;
		width: 100%;
		display: absolute;
	}
	.zzjz-my-menu {
		height: 400upx;
		width: 100%;
		position: absolute;
		top: 300upx;
	}
	.zzjz-my-about {
		height: 100upx;
		width: 100%;
		position: absolute;
		top: 700upx;
		z-index: -1;
	}
</style>
