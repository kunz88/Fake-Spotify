<script setup lang="ts">
import MenuComponent from "../MenuComponent/MenuComponent.vue";
import MenuFooter from "../MenuFooter/MenuFooter.vue";
import PlaylistComponent from "../PlaylistComponent/PlaylistComponent.vue";
</script>

<template>
  <section class="box-border min-h-dvh sidebar fixed grid row-span-4">
    <MenuComponent />
    <PlaylistComponent/>
    <MenuFooter />
  </section>
</template>

<style scoped>
.sidebar{
  min-width: 25%;

}

</style>
