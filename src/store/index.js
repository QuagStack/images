import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth'
import images from './modules/images'

Vue.use(Vuex);

export default new Vuex.Store({
    //When using Vuex, use this modules tag
    //to make modules available in the Vuex Store
    modules: {
        auth,
        images
    }
});