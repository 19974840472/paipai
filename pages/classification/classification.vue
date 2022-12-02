<template>
	<view class="classifycation">
		<navigator url="/pages/search/search">
			<view class="search">
				<u-search placeholder="空气炸锅" :show-action="false"></u-search>
			</view>
		</navigator>

		<view class="cate-container">
			<view class="cate-left">
				<view :class="['cate-item',activeIndex==index?'active':'']" v-for="(item,index) in cateList"
					:key="index" @click="changeActive(index)">{{item.classifyName}}</view>
			</view>
			<view class="cate-right">
				<view class="cate-content" v-for="(goodItem,goodIndex) in goodList" :key="goodIndex">
					<navigator :url="'/pages/list/list?title='+goodItem.text">
						<image :src="'http://localhost:4000/images/'+goodItem.pic_url" mode=""></image>
						<view class="cate-text">{{goodItem.text}}</view>
					</navigator>

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 初始化的分类列表
				cateList: [{
						"classifyId": 1,
						"classifyName": "推荐 ",
					},
					{
						"classifyId": 2,
						"classifyName": "手机 ",
					},
					{
						"classifyId": 3,
						"classifyName": "电脑 ",
					},
					{
						"classifyId": 4,
						"classifyName": "鞋靴",
					},
					{
						"classifyId": 5,
						"classifyName": "二手书",
					},
					{
						"classifyId": 6,
						"classifyName": "汽车用品",
					},
					{
						"classifyId": 7,
						"classifyName": "摄影摄像 ",
					},
					{
						"classifyId": 2,
						"classifyName": "手机 ",
					},
					{
						"classifyId": 3,
						"classifyName": "电脑 ",
					},

				],

				goodList: [],
				activeIndex: 0


			}
		},
		methods: {
			changeActive(i) {
				this.activeIndex = i
				uni.request({
					url: 'http://localhost:4000/api/classification',
					data: {
						classifyName: this.cateList[this.activeIndex].classifyName
					},
					method: "GET",

					success: (res) => {
						console.log(res.data);
						this.goodList = res.data
						// this.text = 'request success';
					}
				})

			}



		},
		onLoad() {
			uni.request({
				url: 'http://localhost:4000/api/classification',
				data: {
					classifyName: this.cateList[this.activeIndex].classifyName
				},
				method: "GET",

				success: (res) => {
					console.log(res.data);
					this.goodList = res.data
					// this.text = 'request success';
				}
			})

		}
	}
</script>

<style lang="scss" scoped>
	.classifycation {
		padding: 20rpx;
		// position: relative;
	}

	.cate-container {
		margin-top: 30rpx;
		width: 100%;
		// height: 100%;
		// height: 100vh;

		display: flex;

		.cate-left {
			width: 200rpx;
			background-color: #F6F6F6;
			// height: 1000rpx;
			overflow: scroll;

			.cate-item {
				width: 100%;
				height: 100rpx;
				line-height: 100rpx;
				padding-left: 40rpx;
				box-sizing: border-box;
			}

			.active {
				background-color: #FFFFFF;
				position: relative;
				padding-left: 40rpx;
				box-sizing: border-box;

				&::before {
					content: '';
					display: block;
					width: 10rpx;
					border-radius: 6rpx;
					height: 40rpx;
					background-color: #FC4353;
					position: absolute;
					left: 0rpx;
					top: 30rpx;
				}
			}
		}

		.cate-right {
			flex: 1;
			display: flex;
			flex-wrap: wrap;
			align-content: flex-start;

			.cate-content {
				width: 33%;
				// height: 200rpx;
				text-align: center;

				image {
					width: 100rpx;
					height: 100rpx;
				}

				.cate-text {}
			}
		}
	}
</style>
