import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import store from './store'
import AuthHandler from './components/AuthHandler'
import ImageList from './components/ImageList'
import UploadForm from './components/UploadForm'

Vue.use(VueRouter)

// This is where we register routes for VueRouter.
// By default, VueRouter uses Hash router.
// This means, VueRouter will look at characters
// to the right of a '#' in a url to figure out
// what set of components to show. 
// For our purposes here, I am just going to use
// broswer routing. Browser routing uses everything to the 
// left of the '#' sign.
export const router = new VueRouter({
    mode: 'history', //history means to use Browser Routing
    routes: [
        {path: '/oauth2/callback', component: AuthHandler}, // AuthHandler is a component!
        {path: '/', component: ImageList}, // ImageList is a component!
        {path: '/upload', component: UploadForm}, // UploadForm is a component!
    ]
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');