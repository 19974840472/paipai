<template>
	<view class="order">
		<tui-tabs :tabs="tabs" :currentTab="currentTab" @change="change"></tui-tabs>
		<view class="list">
			<view class="item">
				<view>
					<view>小明 <view>
							<u-icon name="chat" size="40rpx"> </u-icon>
						</view>
					</view>
					<view>订单完成</view>
				</view>
				<view>
					<view>
						<image src="../../static/image/comm.png" mode=""></image>
					</view>
					<view class="title">小米手机3 2gb内存版白色移动4g手机啥地方和附近的身份和</view>
					<view> ￥176.00</view>
				</view>
			</view>
			<view class="item">
				<view>
					<view>小明 <view>
							<u-icon name="chat" size="40rpx"> </u-icon>
						</view>
					</view>
					<view>订单完成</view>
				</view>
				<view>
					<view>
						<image src="../../static/image/comm.png" mode=""></image>
					</view>
					<view class="title">小米手机3 2gb内存版白色移动4g手机啥地方和附近的身份和</view>
					<view> ￥176.00</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentTab: 0,
				tabs: [{
					name: "我发布的"
				}, {
					name: "我买出的"
				}, {
					name: "下架商品"
				}]
			};
		},
		methods: {
			change(e) {
				this.currentTab = e.index
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order {
		padding: 20rpx;
		box-sizing: border-box;
		background-color: #f4f4f4;

		.list {
			background-color: #f4f4f4;

			.item {
				background-color: #fff;
				margin-top: 20rpx;

				&>view:first-child {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 20rpx 0;
					border-bottom: #f4f4f4 1px solid;

					&>view:first-child {
						display: flex;
						align-items: center;

						view {
							margin-left: 10rpx;
						}
					}

					view:last-child {
						color: #fa3728;
					}
				}

				&>view:last-child {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 30rpx 0;

					image {
						width: 150rpx;
						height: 150rpx;
					}

					.title {
						// padding: 0 20rpx;
						// margin-left: 20rpx;
						width: 400rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
				}
			}
		}
	}
</style>
