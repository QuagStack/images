<template>
<div>
    <div v-if="isLoggedIn" class="image-container">
        <div class="ui large images">
            <img v-for="image in allImages" v-bind:src="image.link" v-bind:key="image.link" class="ui image"/>
        </div>      
    </div>
    <h2 v-else>Log in to get started!</h2>
</div>

</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
    name: 'ImageList',
    methods: {
        //Vuex will find, in all of my Vuex modules, 
        //an action named 'fetchImages' to expose to this 
        //vue component. 
        ...mapActions(['fetchImages']) 

    },
    computed:{
        ...mapGetters(['allImages', 'isLoggedIn'])
    },
    created(){
        this.fetchImages();
    }

}
</script>

<style scoped>
    .image-container{
        column-count: 3;
        column-gap: 0;
    }
    img{
        max-width: 100%;
        padding: 5px;
    }
</style>