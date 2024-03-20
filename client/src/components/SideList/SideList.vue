<script setup lang="ts">
import useFetch from "../../utils/fetch";
import Card from "../Card/Card.vue";
import CardListSection from "../CardListSection/CardListSection.vue";

const { isFetching, data, /* status, */ error } = useFetch(
  "http://localhost:3000/artists"
);

</script>

<template>
  
  <p v-if="isFetching"><span class="loading loading-spinner text-primary"></span></p>
  <template v-if="!error">
    <section class="pt-10 rounded-box">
      <CardListSection title="Artisti più popolari"
        ><Card v-for="({ artist, pictureUrl}, index) in data" :key="index" :artist="artist" :picture-url="pictureUrl" rounded="rounded-full" />
      
      </CardListSection>
      <CardListSection title="Artisti più popolari"
        ><Card v-for="({ artist, pictureUrl }, index) in data" :key="index" :artist="artist" :picture-url="pictureUrl" rounded="rounded-full" />
      
      </CardListSection>
      <CardListSection title="Album più popolari"
        ><Card v-for="({  pictureUrl }, index) in data" :key="index" :picture-url="pictureUrl" rounded="rounded-full" />
      
      </CardListSection>
        
      <!--   <CardListSection title="Album più popolari"
    ><Card rounded="rounded" /><Card rounded="rounded" /><Card
      rounded="rounded" /><Card rounded="rounded" /><Card rounded="rounded"
  /></CardListSection>
  <CardListSection title="Stazioni radio più popolari"
    ><Card /><Card /><Card /><Card /><Card
  /></CardListSection>
  <CardListSection title="Classifiche in primo piano"
    ><Card /><Card /><Card /><Card /><Card
  /></CardListSection>
  <CardListSection title="Zzzzzzz"
    ><Card /><Card /><Card /><Card /><Card
  /></CardListSection>
  <CardListSection title="Episodi di tendenza"
    ><Card /><Card /><Card /><Card
  /></CardListSection> -->
    </section>
  </template>
</template>

<style scoped></style>
