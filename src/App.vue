<template>
    <router-view/>
    <SpeedInsights/>
</template>

<script setup>
import { SpeedInsights } from "@vercel/speed-insights/vue"
import { RouterView} from 'vue-router';
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>



