import Vue from 'vue'
import App from './App'

import list from './pages/list/home.vue'
Vue.component('list',list)

import his from './pages/his/home.vue'
Vue.component('his',his)

import add from './pages/add/home.vue'
Vue.component('add',add)

import book from './pages/book/home.vue'
Vue.component('book',book)

import my from './pages/my/home.vue'
Vue.component('my',my)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
