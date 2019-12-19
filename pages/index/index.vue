<template>
	<view>
		<list v-if="PageCur=='list'"></list>
		<his v-if="PageCur=='his'"></his>
		<add v-if="PageCur=='add'"></add>
		<book v-if="PageCur=='book'"></book>
		<my v-if="PageCur=='my'"></my>
		<view class="box">
			<view class="cu-bar tabbar margin-bottom-xl bg-white foot">
				<view class="action text-green" @click="NavChange" data-cur="list">
					<view class="zzjzIcon-list"></view> 首页
				</view>
				<view class="action text-gray" @click="NavChange" data-cur="his">
					<view class="zzjzIcon-his"></view> 分类
				</view>
				<view class="action text-gray add-action" @click="NavChange" data-cur="add">
					<button class="cu-btn zzjzIcon-add bg-green shadow"></button>
					发布
				</view>
				<view class="action text-gray" @click="NavChange" data-cur="book">
					<view class="cuIcon-cart">
						<view class="zzjzIcon-book badge">99</view>
					</view>
					购物车
				</view>
				<view class="action text-gray" @click="NavChange" data-cur="my">
					<view class="cuIcon-my">
						<view class="zzjzIcon-my badge"></view>
					</view>
					我的
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
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>
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
	.box {
		margin: 20upx 0;
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
		box-shadow: 0 -1upx 6upx rgba(0, 0, 0, 0.1);
	}
</style>
