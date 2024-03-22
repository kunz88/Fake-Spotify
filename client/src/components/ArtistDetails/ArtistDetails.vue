<script setup lang="ts">
import { useRoute } from 'vue-router';
import agent from '../../utils/agent';



export type Artist = {
    title: string;
    text: string;
    duration: number;
    pictureUrl: string;
    musicalGenre: string;
    artist: string;
    otherSongs:string[];
};

const {
  params: { name }
} = useRoute();

try {
  const artistObj:Artist = await agent.Artists.details(name.toString())
  const {artist,pictureUrl,musicalGenre,otherSongs} = artistObj
  console.log(artistObj)
} catch (error) {
  console.log(error)
}


</script>

<template>
<h1>Details</h1>
</template>

<style scoped lang="scss">

</style>