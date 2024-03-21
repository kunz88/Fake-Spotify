<script setup lang="ts">
import CustomButton from "../CustomButton.vue";
</script>

<template>
  <div class=" bg-base-100 h-16 z-50 rounded-t-md nav-custom fixed nav-costum">
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

.nav-costum{
    display: flex;
    min-width: 75%;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px 0 10px;
    border-radius: 20px 0;
    
    

}

</style>
