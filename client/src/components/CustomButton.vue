<script setup lang="ts">

defineProps({
    name:String,
    icon:String,
    color:String

})
</script>

<template>
<button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" :class="color">{{ name }}</button>



</template>

<style></style>