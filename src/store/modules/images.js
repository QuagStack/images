import api from '../../api/imgur'
//Use curly brances for named exports!
//On main.js, notice how router is 
//just "export" and not "export default"
import { router } from '../../main'


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
    async fetchImages({rootState, commit}){       
       const response =  await api.fetchImages(rootState.auth.token);
       commit('setImages', response.data.data)
    },
    async uploadImages({rootState}, images){
        //Get Access token from Auth module
        const token = rootState.auth.token;
        //Call API module to do the upload
        await api.upload(images, token);
        //Redirect the user to ImageList component
        router.push('/')
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