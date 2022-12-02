<template>
	<view class="information">
		<view>
			<u-notice-bar :text="text1"></u-notice-bar>
		</view>
		<view class="list">
			<uni-swipe-action>
				<uni-swipe-action-item :right-options="options" @click="bindClick" @change="swipeChange($event, index)">
					<view>
						<tui-list-view color="#777" @click="aaa">
							<tui-list-cell>
								<view class="content">
									<image src="../../static/image/sj.png" mode=""></image>
									<view>
										<view class="name">
											小民
										</view>
										<view>
											带箭头，有点击效果
										</view>

									</view>
									<image src="../../static/image/comm.png" mode=""></image>
								</view>
							</tui-list-cell>
						</tui-list-view>
					</view>
				</uni-swipe-action-item>
			</uni-swipe-action>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				text1: '请不要脱离平台交易',
				options: [{
					text: '取消',
					style: {
						backgroundColor: '#007aff'
					}
				}, {
					text: '确认',
					style: {
						backgroundColor: '#dd524d'
					}
				}]
			}
		},
		methods: {
			aaa() {
				console.log("aaa")
			},
			// onClick(e) {
			// 	console.log('点击了' + (e.position === 'left' ? '左侧' : '右侧') + e.content.text + '按钮')
			// },
			swipeChange(e, index) {
				console.log('当前状态：' + e + '，下标：' + index)
			}
		}

	}
</script>

<style lang="scss" scoped>
	.information {
		background-color: #f7f7f7;
	}

	.u-page {
		background-color: #fff;
		margin-top: 20rpx;
	}

	.list {
		margin-top: 20rpx;
	}

	.content {
		display: flex;
		align-items: center;
		justify-content: space-between;

		image:first-child {
			margin-right: 30rpx;
		}

		image:last-child {
			align-self: flex-end;
		}

		&>view {
			margin-left: -200rpx;
		}

		.name {

			margin-bottom: 20rpx;
		}
	}

	image {
		width: 100rpx;
		height: 100rpx;
	}
</style>
