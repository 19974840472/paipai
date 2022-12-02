<template>
	<view class="commodity">
		<view class="top">
			<image src="../../static/image/fl.png" mode=""></image>
			<view class="user">
				<view>{{commodity.author}}</view>
				<view>{{commodity.dz}}</view>
			</view>
		</view>
		<view class="content">
			<view class="jg">
				￥<text>{{commodity.newprice}}</text> <text>原价￥{{commodity.oldprice}}</text>
			</view>
			<view class="title">
				<view>{{commodity.title}}</view>
				<view class="img" v-for="item in commodity.src" :key=item>
					<image :src="'http://localhost:4000/images/'+item" mode=""></image>
				</view>
			</view>
		</view>

		<view class="bottom">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: [{
					icon: 'heart',
					text: '收藏'
				}],
				buttonGroup: [{
						text: '聊一聊',
						backgroundColor: '#fbe6e3',
						color: '#ff0000'
					},
					{
						text: '立即购买',
						backgroundColor: '#ff0000',
						color: '#fff'
					}
				],
				commodity: {}
			}
		},
		methods: {
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			}
		},
		onShow() {
			uni.pageScrollTo({
				scrollTop: 0
			});
		},
		onLoad(e) {
			// let id = Number(e.id)
			uni.request({
				url: 'http://localhost:4000/api/commodity',
				data: {
					id: e.id
				},
				method: "GET",

				success: (res) => {
					this.commodity = res.data[0]
					// this.commodity = res.data
					// this.text = 'request success';
				}
			})
		}
	}
</script>

<style lang="scss">
	.commodity {
		padding: 40rpx;
		box-sizing: border-box;

		.top {
			display: flex;
			align-items: center;
			margin-bottom: 40rpx;

			image {
				width: 80rpx;
				height: 80rpx;
			}

			&>view {
				margin-left: 30rpx;

				view:first-child {
					font-size: 40rpx;
					font-weight: 500;
				}

				view:last-child {
					font-size: 20rpx;
					color: #b5b5b5;
				}
			}
		}

		.content {
			.jg {
				color: #ff0000;
				font-size: 20rpx;
				margin-bottom: 60rpx;

				text:first-child {
					font-size: 40rpx;
					margin-right: 20rpx;
				}

				text:last-child {
					color: #b5b5b5;
				}
			}

			.title {
				view:first-child {
					font-weight: 700;
					margin-bottom: 40rpx;
				}

				view:last-child {
					image {
						width: 100%;
					}
				}
			}
		}

		.bottom {
			width: 100%;
			position: fixed;
			bottom: 0;
			left: 0;
		}
	}
</style>
