<template>
    <div>
        Image List
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'ImageList',
    methods: {
        //Vuex will find, in all of my Vuex modules, 
        //an action named 'fetchImages' to expose to this 
        //vue component. 
        ...mapActions(['fetchImages']) 

    },
    created(){
        this.fetchImages();
    }

}
</script>

<style scoped>

</style>