<template>
	<view class="upload">
		<view>
			<!-- 文本输入 -->
			<u--textarea v-model="value2" border="none" height="300rpx" placeholder="请输入内容" count></u--textarea>
			<!-- 图片上传 -->
			<tui-upload :value="value" :serverUrl="serverUrl" @complete="result" @remove="remove"></tui-upload>
			<!-- 位置信息 -->
			<view class="wz">
				<u-picker :show="show" ref="uPicker" :columns="columns" @confirm="confirm" @change="changeHandler"
					@close="wzClose" @cancel="wzClose">
				</u-picker>
				<!-- <u-picker :show="show" ref="uPicker" :columns="columns" @confirm="confirm" @change="changeHandler">
				</u-picker> -->
				<tui-list-view color="#777">
					<tui-list-cell arrow @click="show = true" padding="26rpx 0">
						{{location}}
					</tui-list-cell>
				</tui-list-view>
			</view>
			<!-- 价格 -->
			<view class="jg">
				<u--form labelPosition="left" :model="model1" :rules="rules" ref="form1">
					<u-form-item label="原价" prop="userInfo.yj" border-bottom="true">
						<u--input border="none" :value="model1.userInfo.yj" @input="yjInput"></u--input>
					</u-form-item>
					<u-form-item label="价格" prop="userInfo.jg" border-bottom="true">
						<u--input border="none" :value="model1.userInfo.jg" @input="jgInput"></u--input>
					</u-form-item>
				</u--form>
			</view>
		</view>
		<view class="emit">
			<u-button type="primary" text="确定" @click="submit"></u-button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 下拉选项是否隐藏
				show: false,
				// 下拉选项数据
				columns: [
					['中国', '美国'],
					['深圳', '厦门', '上海', '拉萨']
				],
				columnData: [
					['深圳', '厦门', '上海', '拉萨'],
					['得州', '华盛顿', '纽约', '阿拉斯加']
				],
				// 默认地理位置
				location: "江西 上饶",
				// 价格
				model1: {
					userInfo: {
						yj: '',
						jg: '',
					},
				},
				// 价格规则
				rules: {
					'userInfo.yj': {
						validator: (rule, value, callback) => {
							return (uni.$u.test.amount(value) && value < 100000);
						},
						message: '请正确输入价格,不能大于100000,小数点后最多两位',
						// // 触发器可以同时用blur和change
						trigger: ['change', 'blur']
					},
					'userInfo.jg': {
						validator: (rule, value, callback) => {
							return (uni.$u.test.amount(value) && value < 100000);
						},
						message: '请正确输入价格,价格不能大于100000,小数点后最多两位',
						// // 触发器可以同时用blur和change
						trigger: ['change', 'blur']
					},
				},
				radio: '',
				switchVal: false
			};
		},
		methods: {
			// 原价数据双向绑定
			yjInput(e) {
				this.model1.userInfo.yj = e
			},
			// 价格双向绑定
			jgInput(e) {
				this.model1.userInfo.jg = e
			},
			submit() {
				this.$refs.form1.validate().then(res => {
					uni.$u.toast('校验通过')
				}).catch(errors => {
					uni.$u.toast('校验失败')
				})
			},
			remove() {
				console.log("xx")
			},
			wzClose() {
				this.show = false
			},
			changeHandler(e) {
				const {
					columnIndex,
					value,
					values, // values为当前变化列的数组内容
					index,
					// 微信小程序无法将picker实例传出来，只能通过ref操作
					picker = this.$refs.uPicker
				} = e
				// 当第一列值发生变化时，变化第二列(后一列)对应的选项
				if (columnIndex === 0) {
					// picker为选择器this实例，变化第二列对应的选项
					picker.setColumnValues(1, this.columnData[index])
				}
			},
			// 回调参数为包含columnIndex、value、values
			confirm(e) {
				this.location = e.value.join(" ")
				this.show = false
			}

		},
		mounted() {
			// uni.chooseLocation({
			// 	success: function(res) {
			// 		console.log('位置名称：' + res.name);
			// 		console.log('详细地址：' + res.address);
			// 		console.log('纬度：' + res.latitude);
			// 		console.log('经度：' + res.longitude);
			// 	}
			// });
		}
	}
</script>

<style lang="scss">
	.upload {
		padding: 20rpx;
		box-sizing: border-box;
	}

	.emit {
		margin-top: 40rpx;
	}

	.jg {
		// margin-top: 20rpx;
		// margin-left: 20rpx;
		// padding-left: 30rpx;
		// box-sizing: border-box;
	}

	.tui-list-title {
		padding-left: 0 !important;
	}

	.wz {
		margin-top: 30rpx;
	}
</style>
