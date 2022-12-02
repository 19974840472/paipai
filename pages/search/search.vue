<template>
	<view class="search">
		<u-search placeholder="日照香炉生紫烟" :value="title" @input="searchInp" @search="search" @custom="search"
			:clearabled="true"></u-search>
		<view class="ls" v-show="titleArr.length>0">
			<view>
				<view>历史搜索</view>
				<uni-icons type="trash" size="30" color="#ccc" @click="remove"></uni-icons>
			</view>
			<view>
				<view v-for="item in titleArr" @click="titleTop(item)">{{item}}</view>
			</view>
		</view>
		<view class="ls">
			<view>
				<view>热门搜索</view>
			</view>
			<view>
				<view v-for="item in hot" @click="titleTop(item)">{{item}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				titleArr: [],
				hot: ['手机', '电脑']
			}
		},
		methods: {
			search(e) {
				// 搜索记录存入缓存
				if (uni.getStorageSync('title')) {
					this.titleArr = uni.getStorageSync('title')
					// 判断有没有搜索过
					this.titleArr.forEach((item, index) => {
						if (item === this.title) {
							this.titleArr.splice(index, 1)
						}
					})
					this.titleArr.unshift(this.title)
					this.titleArr = this.titleArr.slice(0, 10)
					uni.setStorageSync('title', this.titleArr)
				} else {

					this.titleArr.push(this.title)
					uni.setStorageSync('title', this.titleArr)
				}
				uni.navigateTo({
					url: '../list/list?title=' + e
				})
			},
			searchInp(e) {
				this.title = e
			},
			titleTop(e) {
				this.title = e
			},
			remove() {
				uni.setStorageSync('title', [])
				this.titleArr = []
			}
		},
		onLoad() {
			if (uni.getStorageSync('title')) {
				this.titleArr = uni.getStorageSync('title')
			}

		}
	}
</script>

<style lang="scss" scoped>
	.search {
		padding: 20rpx;
		box-sizing: border-box;

		.ls {
			padding: 40rpx 0;

			&>view:first-child {
				display: flex;
				justify-content: space-between;

				view {
					font-weight: 700;
				}
			}

			&>view:last-child {
				display: flex;
				// justify-content: start;
				margin-top: 20rpx;
				flex-wrap: wrap;

				view {
					font-size: 20rpx;
					padding: 20rpx;
					border-radius: 40rpx;
					background-color: #f6f6f6;
					margin: 28rpx 30rpx 0 0;
				}
			}
		}
	}
</style>
