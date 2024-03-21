<script setup lang="ts">
import useFetch from "../../utils/fetch";
import Card from "../Card/Card.vue";
import CardListSection from "../CardListSection/CardListSection.vue";

const arrResource = ["artists", "songs"];
const [{ isFetching, data: dataArtist, error }, { data: dataSongs }] =
  arrResource.map((resource) => useFetch(`http://localhost:3000/${resource}`));
</script>

<template>
  <p v-if="isFetching"><span class="loading loading-dots loading-lg"></span></p>
  <template v-if="!error">
    <section class="pt-10 rounded-box">

        <CardListSection title="Artisti più popolari"
          ><Card
            v-for="({ artist, image }, index) in dataArtist"
            :key="index"
            :title="artist"
            :picture-url="image"
            subTitle="Artista"
            rounded="rounded-full"
          />
        </CardListSection>
      <CardListSection title="Album più popolari"
        ><Card
          v-for="({ title, pictureUrl, musicalGenre }, index) in dataSongs"
          :key="index"
          :title="title"
          :picture-url="pictureUrl"
          :subTitle="musicalGenre"
          rounded="rounded"
        />
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

