<script setup lang="ts">
import CustomButton from "../CustomButton.vue";
</script>

<template>
  <div class="bg-base-100 h-16 z-50 rounded-t-md nav-custom fixed nav-costum">
    <nav>
      <button class="join-item btn">«</button>
      <button class="join-item btn">»</button>
    </nav>
    <nav>
      <ul class="menu menu-horizontal justify-end">
        <RouterLink to="/signin"
          ><li><CustomButton name="Iscriviti" color="btn-link" /></li
        ></RouterLink>

        <RouterLink to="/signup"
          ><li><CustomButton name="Accedi" color="btn-ghost" /></li
        ></RouterLink>
      </ul>
    </nav>
  </div>
</template>
<style scoped>
.nav-costum {
  display: flex;
  min-width: 75%;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px;
  border-radius: 20px 0;
}
</style>
