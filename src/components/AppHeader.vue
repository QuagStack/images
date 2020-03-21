<template>
    <div class="ui secondary pointing menu">
        <a href="/" class="active item"> 
            Image Storage
        </a>  

    <div class='right menu'>
        <a href="#" class="ui item" @click="login">
            Login
        </a>
    </div>

    </div>
</template>

<script>

import {mapActions} from 'vuex';

export default {
    name: 'Header',
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

