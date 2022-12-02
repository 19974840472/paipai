<template>
	<view class="my">
		<view class="top">
			<view class="user">
				<view>
					<image src="../../static/image/sj.png" mode=""></image>
					<view class="name">小明</view>
				</view>
				<view>
					<view>
						<view>0</view>
						<view>我的收藏</view>
					</view>
					<view>
						<view>0</view>
						<view>优惠券</view>
					</view>
					<view>
						<view>0元</view>
						<view>已赚</view>
					</view>
				</view>
			</view>
		</view>
		<view class="dd">
			<view>
				<image src="../../static/icon/classification2.png" mode=""></image>
				<view>待付款</view>
			</view>
			<view>
				<image src="../../static/icon/classification2.png" mode=""></image>
				<view>待付款</view>
			</view>
			<view>
				<image src="../../static/icon/classification2.png" mode=""></image>
				<view>待付款</view>
			</view>
			<view>
				<image src="../../static/icon/classification2.png" mode=""></image>
				<view>待付款</view>
			</view>
		</view>
		<view class="dd">
			<view>
				<view>0</view>
				<view>代售处</view>
			</view>
			<view>
				<view>0</view>
				<view>已卖出</view>
			</view>
			<view>
				<view>0</view>
				<view>已下架</view>
			</view>
			<view>
				<image src="../../static/icon/classification2.png" mode=""></image>
				<view>我的闲置</view>
			</view>
		</view>
		<view class="list">
			<tui-list-view color="#777">
				<tui-list-cell arrow>
					<view class="item">
						<image src="../../static/icon/information1.png" mode=""></image>
						<view>我的地址</view>
					</view>
				</tui-list-cell>
				<tui-list-cell arrow>
					<view class="item">
						<image src="../../static/icon/information1.png" mode=""></image>
						<view>我的地址</view>
					</view>
				</tui-list-cell>
				<tui-list-cell arrow>
					<view class="item">
						<image src="../../static/icon/information1.png" mode=""></image>
						<view>我的地址</view>
					</view>
				</tui-list-cell>
				<tui-list-cell arrow>
					<view class="item">
						<image src="../../static/icon/information1.png" mode=""></image>
						<view>我的地址</view>
					</view>
				</tui-list-cell>
			</tui-list-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value4: 0,
			}
		},
		methods: {
			click1(e) {
				console.log('click1', e);
			}
		}
	}
</script>

<style scoped lang="scss">
	.my {
		// padding: 20rpx;
		box-sizing: border-box;
		background-color: #f7f7f7;

		.top {
			height: 300rpx;
			background-color: #65be46;
			position: relative;
			margin-bottom: 80rpx;

			.user {
				// width: 700rpx;
				position: absolute;
				top: 0rpx;
				left: 0rpx;
				top: 60rpx;
				width: 700rpx;
				height: 300rpx;
				background-color: #fff;
				margin: 0 25rpx;
				border-radius: 20rpx;
				padding: 30rpx;
				box-sizing: border-box;

				&>view:first-child {
					display: flex;
					align-items: center;
					// margin-bottom: 20rpx;

					image {
						width: 120rpx;
						height: 120rpx;
					}

					view {
						margin-left: 30rpx;
						font-size: 50rpx;
					}
				}

				&>view:last-child {
					display: flex;
					justify-content: space-around;
					// align-items: center;

					view {
						font-weight: 700;
						text-align: center;
						margin-top: 10rpx;

						&>view:last-child {
							font-size: 20rpx;
							font-weight: 500;
						}
					}
				}
			}
		}

		.dd {
			margin-top: 20rpx;
			padding: 20rpx 40rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #fff;
			// margin-button: 20rpx;

			image {
				width: 60rpx;
				height: 60rpx;
			}

			&>view {
				width: 20%;
				padding: 20rpx;
				box-sizing: border-box;
				text-align: center;

				view {
					font-size: 20rpx;
				}

				&>view:first-child {
					text-align: center;
					font-size: 30rpx;
					font-weight: 600;
					margin-bottom: 20rpx;
				}
			}

			&>view:last-child {
				box-shadow: -4px 0 2rpx #f4f4f4;
				width: 25%;

			}

		}

		.list {
			margin-top: 20rpx;

			.item {
				display: flex;

				image {
					width: 40rpx;
					height: 40rpx;
					margin-right: 20rpx;
				}
			}
		}
	}
</style>
