<script setup lang="ts">

defineProps({
    name:String,
    icon:String,
    color:String

})
</script>

<template>
<button class="btn btn-xs sm:btn-sm md:btn-md " :class="color">{{ name }}</button>



</template>

<style></style>