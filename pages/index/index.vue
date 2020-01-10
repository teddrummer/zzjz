<template>
	<view>
		<list v-if="PageCur=='list'"></list>
		<his v-if="PageCur=='his'"></his>
		<add v-if="PageCur=='add'"></add>
		<book v-if="PageCur=='book'"></book>
		<my v-if="PageCur=='my'"></my>
		<view class="box">
			<view class="cu-bar tabbar bg-white shadow foot">
				<view class="action" @click="NavChange" data-cur="list">
					<view :class="'zzjz_iconfont zi_list ' + [PageCur=='list'?'text-green':'text-gray']"></view>
					<view :class="PageCur=='list'?'text-green':'text-gray'">首页</view>
				</view>
				<view class="action" @click="NavChange" data-cur="his">
					<view :class="'zzjz_iconfont zi_his ' + [PageCur=='his'?'text-green':'text-gray']"></view>
					<view :class="PageCur=='his'?'text-green':'text-gray'">分类</view>
					
				</view>
				<view class="action add-action" @click="NavChange" data-cur="add">
					<button :class="'zzjz_iconfont zi_add cu-btn shadow ' + [PageCur=='add'?'bg-green':'bg-white']  "></button>
					<view :class="PageCur=='add'?'text-green':'text-gray'">发布</view>
				</view>
				<view class="action" @click="NavChange" data-cur="book">
					<view :class="'zzjz_iconfont zi_book ' + [PageCur=='book'?'text-green':'text-gray']"></view>
					<view :class="PageCur=='book'?'text-green':'text-gray'">购物车</view>
				</view>
				<view class="action" @click="NavChange" data-cur="my">
					<view :class="'zzjz_iconfont zi_my ' + [PageCur=='my'?'text-green':'text-gray']"></view>
					<view :class="PageCur=='my'?'text-green':'text-gray'">我的</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'list'
			}
		},
		methods: {
			NavChange: function(e) {
				console.log('NavChange')
				console.log(e.currentTarget.dataset.cur)
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>
	.cu-btn {
		position: relative;
		border: 0upx;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		padding: 0 30upx;
		font-size: 28upx;
		height: 64upx;
		line-height: 1;
		text-align: center;
		text-decoration: none;
		overflow: visible;
		margin-left: initial;
		transform: translate(0upx, 0upx);
		margin-right: initial;
	}
	.cu-btn[disabled] {
		opacity: 0.6;
		color: #ffffff;
	}
	.cu-btn::after {
		display: none;
	}
	.cu-btn:not([class*="bg-"]) {
		background-color: #f0f0f0;
	}
	.cu-btn[class*="bg-"]::after {
		display: none;
	}
	.shadow[class*='white'] {
		--ShadowSize: 0 1upx 6upx;
	}
	.text-green {
		color: #39b54a;
	}
	.text-gray {
		color: #aaaaaa;
	}
	.margin-bottom-xl {
		margin-bottom: 50upx;
	}
	.bg-white {
		background-color: #ffffff;
		color: #666666;
	}
	.bg-green {
		background-color: #39b54a;
		color: #ffffff;
	}
	.box {
		/* margin: 20upx 0; */
	}
	.box view.cu-bar {
		margin-top: 20upx;
	}
	.cu-bar {
		display: flex;
		position: relative;
		align-items: center;
		min-height: 100upx;
		justify-content: space-between;
	}
	.cu-bar.tabbar {
		padding: 0;
		height: calc(100upx + env(safe-area-inset-bottom) / 2);
		padding-bottom: calc(env(safe-area-inset-bottom) / 2);
	}
	.cu-bar.tabbar .action {
		font-size: 22upx;
		position: relative;
		flex: 1;
		text-align: center;
		padding: 0;
		display: block;
		height: auto;
		line-height: 1;
		margin: 0;
		background-color: inherit;
		overflow: initial;
	}
	.cu-bar.tabbar .action.add-action {
		position: relative;
		z-index: 2;
		padding-top: 50upx;
	}
	.cu-bar.tabbar .action.add-action [class*="zi_"] {
		position: absolute;
		width: 70upx;
		z-index: 2;
		height: 70upx;
		border-radius: 50%;
		line-height: 70upx;
		font-size: 50upx;
		top: -35upx;
		left: 0;
		right: 0;
		margin: auto;
		padding: 0;
	}
	.cu-bar.tabbar .action.add-action::after {
		content: "";
		position: absolute;
		width: 100upx;
		height: 100upx;
		top: -50upx;
		left: 0;
		right: 0;
		margin: auto;
		box-shadow: 0 -3upx 8upx rgba(0, 0, 0, 0.08);
		border-radius: 50upx;
		background-color: inherit;
		z-index: 0;
	}
	.cu-bar.tabbar .action.add-action::before {
		content: "";
		position: absolute;
		width: 100upx;
		height: 30upx;
		bottom: 30upx;
		left: 0;
		right: 0;
		margin: auto;
		background-color: inherit;
		z-index: 1;
	}
	.cu-bar.tabbar .action [class*="zi_"] {
		width: 100upx;
		position: relative;
		display: block;
		height: auto;
		margin: 0 auto 10upx;
		text-align: center;
		font-size: 40upx;
	}
	.cu-tag.badge {
		border-radius: 200upx;
		position: absolute;
		top: -10upx;
		right: -10upx;
		font-size: 20upx;
		padding: 0upx 10upx;
		height: 28upx;
		color: #ffffff;
	}
	.cu-bar.foot {
		position: fixed;
		width: 100%;
		bottom: 0;
		z-index: 1024;
		/* box-shadow: 0 -1upx 6upx rgba(0, 0, 0, 0.1); */
	}
</style>
