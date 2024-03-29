import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import HighchartsVue from 'highcharts-vue'
import 'element-plus/dist/index.css'
import '@/style/iconfont.css'
console.log('VUE_APP_BASE_API', process.env,)
createApp(App).use(store).use(router).use(ElementPlus).use(HighchartsVue).mount('#app')
