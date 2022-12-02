<template>
	<!-- <u-overlay :show="show" @click="show = true" zIndex="1" opacity="0.4">

	</u-overlay> -->
	<view class="release">
		<view>
			<view class="text">
				<view>
					拍拍,
				</view>
				<view>
					让沉睡的好物活起来。
				</view>
			</view>
			<view class="font">
				出自 / 拍拍物活社
			</view>

		</view>
		<view class="icon">
			<view class="item">
				<navigator url="/pages/upload/upload">
					<image src="../../static/image/sj.png" mode=""></image>
					<view>快速回收</view>
					<view>专业检查，急速成交</view>
				</navigator>
			</view>
			<view class="item">
				<navigator url="/pages/upload/upload">
					<image src="../../static/image/sj.png" mode=""></image>
					<view>快速回收</view>
					<view>专业检查，急速成交</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.warp {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.rect {
		width: 120px;
		height: 120px;
		background-color: #fff;
	}

	.release {
		padding: 80rpx 60rpx;

		.text {
			font-size: 25px;
			font-weight: 500;
		}

		.font {
			margin-top: 40rpx;
		}

		.icon {
			position: fixed;
			bottom: 200rpx;
			left: 0;
			width: 100%;
			display: flex;
			justify-content: space-around;
			align-items: center;

			.item {
				text-align: center;

				view:first-child {
					font-size: 20px;
				}

				view:last-child {
					font-size: 10px;
					color: #999;
				}
			}

			image {
				width: 120rpx;
				height: 120rpx;
			}
		}
	}
</style>
