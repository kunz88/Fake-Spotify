<script setup lang="ts">
  defineProps({
    title: String
  });
</script>

<template>
    
  <section class="section-component p-4">  
    <h1 class="section-title font-bold text-white">{{ title }}</h1>
    
    <section class="cards-container"><slot /></section>
    <!-- ELEMENTO "JOLLY" DI HTML CHE VIENE SOSTITUITO CON IL CONTENUTO DEL COMPONENTE -->

  </section>
</template>
<style scoped lang="scss">
  @import '../../scss/includes.scss';

  .section-component {
    &:not(:first-child) {
      margin-top: 10px;
      margin-bottom: 10px;


      padding-top: 10px;
    }
    .cards-container {
    @include flex($flex-wrap: wrap);

    gap: rem(26);
  }

    .section-title {
      margin-bottom: rem(8);
      font-size: rem(24);
      &:hover{
        text-decoration: underline;
      }
    }
  }
</style>