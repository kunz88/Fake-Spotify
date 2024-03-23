<script setup lang="ts">
import useFetch from "../../utils/fetch";
import Card from "../Card/Card.vue";
import CardListSection from "../CardListSection/CardListSection.vue";
import FakeListComponent from "../FakeListComponent/FakeListComponent.vue"

const arrResource = ["artists", "songs"];
const [{ isFetching, data: dataArtist }, { data: dataSongs }] =
  arrResource.map((resource) => useFetch(`http://localhost:3000/${resource}`));
</script>

<template>
  <div v-if="isFetching" class="h-screen min-w-full loading-lg h-screen min-w-full flex justify-center"><span class="loading loading-dots w-10"></span></div>
  <template v-if="!isFetching">
    <section class="rounded-box">

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

      <FakeListComponent/>
    </section>
  </template>
</template>

