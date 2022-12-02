<script>
	export default {
		onLaunch: function() {
			console.log(uni.$u.config.v);
			console.log("页面加载")
			uni.request({
				url: 'http://localhost:4000/api/index', //仅为示例，并非真实接口地址。
				data: {
					text: '11111111111111111111111111111111111111111111111111111111111111111111'
				},
				method: "GET",
				// header: {
				// 	'custom-header': 'hello' //自定义请求头信息
				// },
				success: (res) => {
					console.log(res.data);
					// this.text = 'request success';
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
</style>
