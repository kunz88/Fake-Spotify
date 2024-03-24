<script setup lang="ts">
import ArtistCompontent from "./ArtistCompontent.vue";
import { useRoute } from "vue-router";
import useFetch from "../../utils/fetch";
import FakeListComponent from "../FakeListComponent/FakeListComponent.vue";

const {
  params: { name },
} = useRoute();

const { isFetching, data } = useFetch(`http://localhost:3000/artists/${name}`);


</script>

<template>
  <div
    v-if="isFetching"
    class="h-screen min-w-full loading-lg h-screen min-w-full flex justify-center"
  >
    <span class="loading loading-dots w-10"></span>
  </div>
  <template v-if="!isFetching">
    <ArtistCompontent
    v-for="({ artist, pictureUrl,musicalGenre,otherSongs }, index) in data"
    :key="index"
      :picture-url="pictureUrl"
      :artist="artist"
      :musical-genre="musicalGenre"
      :other-songs="otherSongs"
    />
  </template>

  <section class="rounded-box">
    <FakeListComponent/>
  </section>
</template>
