<template>
    <div class="ui secondary pointing menu">  
        <router-link to="/" class="active item">Image Storage</router-link>
        <div class='right menu'>
            <div v-if="isLoggedIn" class="horizontal">
                <!--Something to keep in mind about 
                anchor tags: a click reloads an entire
                page, and the DOM.
                For routing, you are better off to use
                Vue Router element router-link.
                On rendering, it will BECOME an anchor tag, though. 
                However, these anchor tags have a special set of 
                on click event handlers that prevent that an entire reload -->
               <router-link to="/" class="item">Galleries</router-link>
               <router-link to="/upload" class="item">Upload</router-link>
                <!-- If you are not doing any actual navigation, an anchor tag is fine -->
               <a class="item" @click="logout">Logout</a>
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
        ...mapActions(['login', 'logout']) 

    }
    
}
</script>

<style scoped>

    .horizontal{
        display: flex;
        flex-direction: row;
    }

</style>>

