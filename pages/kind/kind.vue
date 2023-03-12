<template>
	<view class="kind-main">
	<!-- 	<uni-nav-bar class="head-nav" fixed backgroundColor="#354E44">
		    <view class="title">
				分类页
			</view>
		    <view slot="left">
				<image class="icon icon-chat" src="../../static/icons/chat.png"></image>
			</view>
		    <view slot="right">
				<image @tap="goSearch" class="icon icon-search" src="../../static/icons/search.png"></image>
				<image @tap="goCart" class="icon icon-cart" src="../../static/icons/cart.png"></image>
			</view>
		</uni-nav-bar> 
		-->
		<view v-if="kindList.length>0">
			<navigator v-for="item in kindList.slice(0,2)"  class="block chuangyi" :url="'/kindPackage/list/list?kindId='+item.id">
				<image class="img" :src="item.icon" mode="scaleToFill"></image>
				<view class="ctitle">{{item.name}}</view>
				<view class="etitle">{{item.etitle}}</view>
			</navigator>
		</view>
		

		<view class="f-d"v-if="kindList.length>0">
			<navigator v-for="i in kindList.slice(2,4)"  class="block fengge" :url="'/kindPackage/list/list?kindId='+i.id">
				<image class="img" :src="i.icon" mode="scaleToFill"></image>
				<view class="ctitle">{{i.name}}</view>
				<view class="etitle">{{i.etitle}}</view>
			</navigator>
		</view>

	</view>
</template>

<script>
	import {findCategory} from '@/api/kind'
	export default {
		data() {
			return {
				kindList: []
			}
		},
		onLoad() {
			this.getKindList()
		},
		computed: {


		},
		onPullDownRefresh(){
			this.getKindList()
		},
		methods: {
			getKindList() {
				findCategory()
					.then(res => {
						
						this.kindList = res.data.category.children;
						uni.stopPullDownRefresh()
					})
			},
			goCart(){
				uni.navigateTo({
					url:'../buyCart/index'
				})
			},
			goSearch(){
				uni.navigateTo({
					url: '/pages/search/index'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.kind-main {
		.head-nav{
			background-color: $base-bg;
			box-sizing: border-box;
			.title{
				width: 100%;
				text-align: center;
				color: #fff;
			}
			.icon{
				width: 36rpx;
				height: 36rpx;
				&.icon-chat{
					margin-left: 20rpx;
				}
				&.icon-search{
					margin-right: 40rpx;
				}
			}
			
		}
		

		.f-d {
			width: 670rpx;
			display: flex;
			margin: 0 auto;
			margin-bottom: 48rpx;
			justify-content: space-between;

			.fengge,
			.dengju {
				width: 300rpx;
				height: 410rpx;
				background: #FAFAFA;
				box-shadow: 0 12px 20px 0 rgba(83, 66, 49, 0.03);
				border-radius: 20px;
				border-radius: 20px;
			}
		}

		.block {
			position: relative;
			.img {
				position: absolute;
				right: 0;
				top: 0;
				width: 100%;
				height: 100%;
			}
			.ctitle{
				position: absolute;
				left: 75rpx;
				top: 75rpx;
				font-size: 48rpx;
				color: #3E3E3E;
			}
			.etitle{
				position: absolute;
				left: 52rpx;
				top: 220rpx;
				color: #7F7F7F;
				font-size: 30rpx;
			}
			
			&.chuangyi,
			&.shipin {
				width: 670rpx;
				height: 200rpx;
				background: #D5D5D5;
				box-shadow: 0 12px 20px 0 rgba(83, 66, 49, 0.05);
				border-radius: 20px;
				margin: 28px auto;
				.img{
					width: 60%;
				}
			
			}
			&.shipin{
				background-color: #fff;
			}
		}

	}
</style>
