<script setup lang="ts">
import CustomButton from "../CustomButton.vue";
</script>

<template>
  <div class="navbar bg-base-100 h-16 z-50 rounded-t-md nav-custom fixed">
    <div >
      <button class="join-item btn">«</button>
      <button class="join-item btn">»</button>
    </div>
    <ul class="menu menu-horizontal justify-end">
        <li><CustomButton name="Iscriviti" color="btn-link" /></li>
        <li><CustomButton name="Accedi" color="btn-ghost" /></li>
      </ul>
  </div>
</template>
<style scoped >

</style>
