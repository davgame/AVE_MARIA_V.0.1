<template>
    <router-view/>
    <Home/>
</template>

<script setup>
import Home from './views/Home.vue';
import { RouterView} from 'vue-router';
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>



