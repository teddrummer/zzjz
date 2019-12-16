<template>
	<view>
		<view class="zzjz-add-top zzjz-bg-red">
			<view class="zzjz-add-top-expenses zzjz-flex-grow-1 zzjz-bg-blue">收入</view>
			<view class="zzjz-add-top-income zzjz-flex-grow-1 zzjz-bg-green">支出</view>
		</view>
		<view class="zzjz-add-form"></view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.zzjz-add-top {
		height: 150upx;
		width: 100vw;
		position: fixed;
		display: flex;
		flex-flow: nowrap;
		justify-content: space-between;
		align-items: center;
	}
	.zzjz-add-top-expenses .zzjz-add-top-income {
		height: 150upx;
		font-size: 30upx;
	}
	
</style>
