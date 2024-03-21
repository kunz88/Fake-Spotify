<script setup lang="ts">

defineProps({
  title: String,
  subTitle: String,
  pictureUrl: String,
  musicalGenre: String,
  rounded: String,
});

</script>
<template> 
    <div  class="card w-48 h-64  shadow-xl bg-costum">
      <figure class="mt-1 relative">
        <img
          :src="pictureUrl"
          alt="Shoes"
          class="h-40 w-40 m-5"
          :class="rounded"
        />
        <button
          class="btn btn-primary join-item absolute bottom-0 right-7 btn-player"
        >
          <font-awesome-icon :icon="['fas', 'play']" size="lg" />
        </button>
      </figure>
      <div class="card-body p-3">
        <h6 class="card-title text-base font-bold text-white">{{ title }}</h6>
        <p>{{ subTitle }}</p>
        <div class="card-actions"></div>
      </div>
    </div>
</template>

<style scoped lang="scss">
.bg-costum {
  background-color: #181818;
  border-radius: 8px;
  transition: 0.3s all ease-in-out;
}
:hover.bg-costum {
  background-color: #333;
  z-index: 0;
}
</style>
