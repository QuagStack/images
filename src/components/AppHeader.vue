<template>
    <div class="ui secondary pointing menu">
        <a href="/" class="active item"> 
            Image Storage
        </a>  
        <div class='right menu'>
            <div v-if="isLoggedIn">
                Gallery
            </div>
            <a href="#" class="ui item" @click="login" v-else>
                Login
            </a>
        </div>

    </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex';


export default {
    name: 'Header',
    //Use computed properties to mapGetters!
    computed:{
        //Vuex will find, in all of my Vuex modules,
        //a getter named 'isLoggedIn' to expose to 
        //this vue componenet. 
        ...mapGetters(['isLoggedIn'])
    },
    methods: {
        //Vuex will find, in all of my Vuex modules, 
        //an action named 'login' to expose to this 
        //vue component. 
        ...mapActions(['login']) 

    }
    
}
</script>

<style scoped>



</style>>

