<template>
	<view class="list">

		<navigator url="/pages/search/search">
			<view class="u-search">
				<u-search placeholder="苹果数据线" :show-action="false" height="60rpx" :value="title"></u-search>
			</view>
		</navigator>

		<tui-tabs :tabs="tabs" :currentTab="currentTab" @change="change"></tui-tabs>
		<view class="commodity">
			<navigator :url="'/pages/commodity/commodity?id='+item.commodity_id" v-for="item in commodity">
				<view class="item">
					<view>
						<image :src="'http://localhost:4000/images/'+item.src[0]" mode=""></image>
					</view>
					<view>
						<view class="title">{{item.title}}</view>
						<view class="jg">
							￥<text>{{item.newprice}}</text> <text>原价￥{{item.oldprice}}</text>
						</view>
					</view>
				</view>
			</navigator>
		</view>
	</view>

</template>

<script>
	import store from '@/store/index.js'
	export default {
		data() {
			return {
				currentTab: 0,
				commodity: [],
				title: '',
				tabs: [{
					name: "综合"
				}, {
					name: "最新发布"
				}, {
					name: "同城"
				}, {
					name: "价格最低",

				}]
			};
		},
		methods: {
			change(e) {
				this.currentTab = e.index
			}
		},
		onLoad(e) {
			this.title = e.title
			uni.request({
				url: 'http://localhost:4000/api/list',
				data: {
					title: this.title
				},
				method: "GET",
				// header: {
				// 	'custom-header': 'hello' //自定义请求头信息
				// },
				success: (res) => {
					this.commodity = res.data
					// this.text = 'request success';
					console.log(this.commodity)
				}
			})

		}
	}
</script>

<style lang="scss" scoped>
	.list {
		padding: 20rpx;
		box-sizing: border-box;

		.commodity {
			margin-top: 30rpx;

			.item {
				display: flex;
				margin-top: 20rpx;
				border-bottom: #f4f4f4 1px solid;

				image {
					width: 200rpx;
					height: 200rpx;
					margin-right: 20rpx;
				}

				.title {
					padding-top: 20rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}

				.jg {
					color: #ff0000;
					font-size: 20rpx;
					margin-bottom: 60rpx;
					margin-top: 20rpx;

					text:first-child {
						font-size: 40rpx;
						margin-right: 20rpx;
					}

					text:last-child {
						color: #b5b5b5;
					}
				}
			}
		}
	}
</style>
