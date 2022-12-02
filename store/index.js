// #ifndef VUE3
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); //vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
			// #endif


			// #ifdef VUE3
			// 页面路径：store/index.js
			import {
				createStore
			} from 'vuex'
			const store = createStore({

				// #endif
				state: { //存放状态
					"username": "foo",
					"age": 18
				}
			})
			export default store
