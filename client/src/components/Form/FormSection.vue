<script setup lang="ts">
</script>
<template>
  <div class="container mx-auto flex justify-center content-center h-screen">


      <slot />

  </div>
</template>

<style scoped>
@import "../../scss/includes.scss";
.container{
    background: linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgb(0, 0, 0) 100%);
}

</style>
