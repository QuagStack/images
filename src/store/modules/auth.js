import api from '../../api/imgur'
import qs from 'qs';
//Use curly brances for named exports!
//On main.js, notice how router is 
//just "export" and not "export default"
import { router } from '../../main'

const state = {
    token: window.localStorage.getItem('imgur_token')
};

const getters = {
    // This syntax can turn a value into a boolean. 
    // !!null returns false. !!someValue returns true
    isLoggedIn: state =>!!state.token        
};

const actions = {
    logout: ({ commit }) =>{
        commit('setToken', null);
        //Remove from local storage!
        window.localStorage.removeItem('imgur_token');
        //Now lets re-route to the root route, using Vuex!
        router.push('/')
    },
    login: () =>{
        api.login();
    },
    finalizeLogin({commit}, hash){
        //Gets rid of hash character, and has query string
        const query = qs.parse(hash.replace('#', ''))
        //Now use commit to call the set token mutation.
        //Remember, access token is part of the query string. 
        commit('setToken', query.access_token); 
        //This will be used to perist the token!
        window.localStorage.setItem('imgur_token', query.access_token); 
        //Now lets re-route to the root route, using Vuex!
        router.push('/')

    },
};

const mutations = {
    setToken: (state, token) => {
        state.token = token
    }
};

export default{
    state,
    getters,
    actions,
    mutations
};