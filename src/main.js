import Vue from 'vue'
import App from './App.vue'
import './styles/base.css' // css 样式重置
import './styles/common.css' // 公共全局样式
import './assets/iconfont/iconfont.css' // 字体图标的样式

// 全局注册
import BaseGoodsltem from './components/BaseGoodsltem.vue'
import BaseBrandItem from './components/BaseBrandItem.vue'
import BaseTopicItem from './components/BaseTopicItem.vue'
Vue.component('BaseGoodsltem',BaseGoodsltem)
Vue.component('BaseBrandItem',BaseBrandItem)
Vue.component('BaseTopicItem',BaseTopicItem)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
