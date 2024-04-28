<template>
    <router-view/>
</template>

<script setup>
import { RouterView} from 'vue-router';
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>



