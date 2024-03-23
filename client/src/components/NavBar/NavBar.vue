<script setup lang="ts">
import CustomButton from "../CustomButton.vue";
import {store} from "../../store"



// funzione di logout cancella il token dallo storage
const logout = () => { 
  localStorage.setItem("token","")
  location.reload();

}
// funzione che avvia la chiamata al server
store.logged.checkToken()


</script>

<template>
  <div
    class="bg-base-100 h-16 z-50 nav-custom sticky top-0 right-0 nav-costum"
  >
    <nav>
      <button class="join-item btn">«</button>
      <button class="join-item btn">»</button>
    </nav>
    <div v-if="store.logged.isLogged" class="avatar flex items-center gap-3">
      <p class="text-neutral-400 text-lg font-bold">{{store.getUser.user}}</p>
      <div class="w-14 rounded-full">
        <img
          src="https://quifinanza.it/wp-content/uploads/sites/5/2024/02/Quanto-costano-i-funerali-di-Carlo-III.jpg"
        />
      </div>
      <a class="btn btn-ghost" @click="logout">Logout</a>
    </div>
    <nav v-else>

      <ul  class="menu menu-horizontal justify-end">
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
<style scoped lang="scss">
@import "../../scss/includes.scss";

.nav-costum {
  display: flex;
  min-width: 75%;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px;
  backdrop-filter: blur(rem(2));
  background: 333, 0.4;
}
</style>
