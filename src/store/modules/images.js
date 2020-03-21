import api from '../../api/imgur'

const state = {
    images: []
};

const getters = {
    //Returns Images From State
    allImages: state => state.images
};

const actions = {
    //{rootState} is a reference to 
    //the entire state, including
    //state of other modules
    async fetchImages({rootState}){       
       const response =  await api.fetchImages(rootState.auth.token);
       console.log(response);
    }
};

const mutations = {
    setImages: (state, images) =>{
        state.images = images;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}