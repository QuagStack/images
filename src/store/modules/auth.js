import api from '../../api/imgur'

const state = {
    token: null
};

const getters = {
    // This syntax can turn a value into a boolean. 
    // !!null returns false. !!someValue returns true
    isLoggedIn: state =>!!state.token        
};

const actions = {
    logout: ({ commit }) =>{
        commit('setToken', null);
    },
    login: () =>{
        api.login();
    }
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