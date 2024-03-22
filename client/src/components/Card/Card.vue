<script setup lang="ts">

defineProps({
  title: String,
  subTitle: String,
  pictureUrl: String,
  rounded: String,
});

</script>
<template> 
<RouterLink :to="`/${title}`">
    <div  class="card w-48 h-64  shadow-xl bg-costum">
      
      <figure class="mt-1 relative ">
        <img
          :src="pictureUrl"
          alt="Shoes"
          class="h-40 w-40 m-5 "
          :class="rounded"
        />
        <button
          class="btn btn-primary join-item absolute bottom-0 right-7 btn-player -z-50"
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
  </RouterLink>
</template>

<style scoped lang="scss">
@import "../../scss/includes.scss";
.bg-costum {
  background-color: #181818;
  border-radius: 8px;
  transition: $transition;
}

:hover.bg-costum {
  background-color: #333;
  .btn{
    z-index: 0;
    transition: $transition;
  }
}

</style>
