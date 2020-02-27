<template>
	<view>
		<!-- <view class="top zzjz-bg-blue">
			<view class="top-income zzjz-flex-grow-1 ">收入</view>
			<view class="top-expenses zzjz-flex-grow-1 ">支出</view>
		</view> -->
		<scroll-view scroll-x class="zzjz-bg-green nav zzjz-text-center">
			<view class="cu-item" :class="PageCur=='expenses'?'zzjz-text-white cur':''" @tap="tabSelect" data-id="expenses">
				支出
			</view>
			<view class="cu-item" :class="PageCur=='income'?'zzjz-text-white cur':''" @tap="tabSelect" data-id="income">
				收入
			</view>
		</scroll-view>
		<view class="form" v-if="PageCur=='expenses'">
			<view class="form-type">
				<view @tap="formTypeimgClick(item)" @longtap="formTypeimgLongTap" v-for="(item,index) in ExpensesItems" :key="index"
				class="form-typeimg" :class="ExpensesType==item.id?'zzjz-text-green':'zzjz-text-gray'">
					<view class="zzjz_iconfont" :class="item.id"></view>
					<view >{{item.title}}</view>
				</view>
				<view></view><view></view><view></view><view></view><view></view>
			</view>
		</view>
		<view class="form" v-if="PageCur=='income'">
			<view class="form-type">
				<view @tap="formTypeimgClick(item)" @longtap="formTypeimgLongTap" v-for="(item,index) in IncomeItems" :key="index" 
				class="form-typeimg" :class="IncomeType==item.id?'zzjz-text-green':'zzjz-text-gray'">
					<view class="zzjz_iconfont" :class="item.id"></view>
					<view >{{item.title}}</view>
				</view>
				<view></view><view></view><view></view><view></view><view></view>
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
				inputType:'simple',
				PageCur: 'expenses',
				ExpensesType: '',
				IncomeType: '',
				ExpensesItems: [
					{
						id: 'zi_canyin',
						title: '餐饮'
					},
					{
						id: 'zi_gouwu',
						title: '购物'
					},
					{
						id: 'zi_fushi',
						title: '服饰'
					},
					{
						id: 'zi_jiaotong',
						title: '交通'
					},
					{
						id: 'zi_yule',
						title: '娱乐'
					},
					{
						id: 'zi_shejiao',
						title: '社交'
					},
					{
						id: 'zi_jujia',
						title: '居家'
					},
					{
						id: 'zi_tongxun',
						title: '通讯'
					},
					{
						id: 'zi_lingshi',
						title: '零食'
					},
					{
						id: 'zi_meirong',
						title: '美容'
					},
					{
						id: 'zi_yundong',
						title: '运动'
					},
					{
						id: 'zi_lvxing',
						title: '旅行'
					},
					{
						id: 'zi_shuma',
						title: '数码'
					},
					{
						id: 'zi_xuexi',
						title: '学习'
					},
					{
						id: 'zi_yiliao',
						title: '医疗'
					},
					{
						id: 'zi_shuji',
						title: '书籍'
					},
					{
						id: 'zi_chongwu',
						title: '宠物'
					},
					{
						id: 'zi_caipiao',
						title: '彩票'
					},
					{
						id: 'zi_qiche',
						title: '汽车'
					},
					{
						id: 'zi_bangong',
						title: '办公'
					},
					{
						id: 'zi_zhufang',
						title: '住房'
					},
					{
						id: 'zi_weixiu',
						title: '维修'
					},
					{
						id: 'zi_haizi',
						title: '孩子'
					},
					{
						id: 'zi_changbei',
						title: '长辈'
					},
					{
						id: 'zi_liwu',
						title: '礼物'
					},
					{
						id: 'zi_lijin',
						title: '礼金'
					},
					{
						id: 'zi_huankuan',
						title: '还款'
					},
					{
						id: 'zi_juanzeng',
						title: '捐赠'
					},
					{
						id: 'zi_yiban',
						title: '其他'
					}
				],
				IncomeItems: [
					{
						id: 'zi_licai',
						title: '理财'
					},
					{
						id: 'zi_gongzi',
						title: '工资'
					},
					{
						id: 'zi_jianzhi',
						title: '兼职'
					},
					{
						id: 'zi_licaishouyi',
						title: '理财收益'
					},
					{
						id: 'zi_qitashouru',
						title: '其他'
					}
				]
			}
		},
		methods: {
			tabSelect: function(e) {
				this.PageCur = e.currentTarget.dataset.id;
				// this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			formTypeimgClick: function (item) {
				if (longClick) {
					console.log('longtap');
				} else{
					console.log('tap');
					this.type='simple';
					this.$refs['simple'].open();
				}
				longClick = false;
				console.log(item);
				console.log(item.id);
				console.log(item.title);
				if (this.PageCur=='income') this.IncomeType=item.id;
				else this.ExpensesType = item.id;
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
	.nav {
		position: fixed;
		justify-content: space-between;
		width: 100%;
		top: 0;
		z-index: 1024;
		box-shadow: 0 1upx 6upx rgba(0, 0, 0, 0.1);
	}
	.nav .cu-item {
		height: 90upx;
		display: inline-block;
		line-height: 90upx;
		// margin: 0 10upx;
		// text-align: center;
		padding: 0 20upx;
	}
	.nav .cu-item.cur {
		border-bottom: 4upx solid;
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
	.form-type > i {
		width: 120upx;
		margin-right: 5upx;
	}
	.form-typeimg {
		height: 120upx;
		width: 120upx;
		margin: 10upx 5upx 0 5upx;
		font-size: 30upx;
		text-align: center;
	}
	
</style>
