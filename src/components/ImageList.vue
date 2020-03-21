<template>
    <div>
        <img v-for="image in allImages" v-bind:src="image.link" v-bind:key="image.link"/>
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
        ...mapGetters(['allImages'])
    },
    created(){
        this.fetchImages();
    }

}
</script>

<style scoped>

</style>