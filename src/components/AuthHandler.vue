<template>
    <div>
        Please wait...
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name:'AuthHandler',
    methods:{
        //Vuex will find, in all of my Vuex modules, 
        //an action named 'login' to expose to this 
        //vue component. 
        ...mapActions(['finalizeLogin']) 
    },
    created(){
        this.finalizeLogin(window.location.hash)
    }
};
</script>

<style scoped>

</style>