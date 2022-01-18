import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import FAQ from './components/FAQ.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/', name: 'home', compoent: Home},
    {path: '/faq', name: 'faq', compoent: FAQ},
]

const router = new VueRouter({
    routes,
})

export default router