<script setup lang="ts">
import CardListSection from "../CardListSection/CardListSection.vue";
import Card from "../Card/Card.vue";
</script>

<template>
  <CardListSection title="Classifiche in primo piano">
    <Card
      title="Globally Top Songs"
      picture-url="https://storage.googleapis.com/pr-newsroom-wp/1/2023/11/Artists-Global-GREEN_1x1.png"
      subTitle="Top 10"
      rounded="rounded"
    />
    <Card
      title="Top Album"
      picture-url="https://storage.googleapis.com/pr-newsroom-wp/1/2023/11/Albums-Global-PURPLE_1x1.png"
      subTitle="Top 20"
      rounded="rounded-full"
    />
    <Card
      title="Top Album US"
      picture-url="https://storage.googleapis.com/pr-newsroom-wp/1/2023/11/Albums-US-BLACK_1x1.png"
      subTitle="Top 10"
      rounded="rounded"
    />
    <Card
      title="Us Creators"
      picture-url="https://storage.googleapis.com/pr-newsroom-wp/1/2023/11/Anticipated-Podcast-Global-YELLOW_1x1.png"
      subTitle="Top 10 Creator"
      rounded="rounded-full"
    />
    <Card
      title="Us Artists"
      picture-url="https://storage.googleapis.com/pr-newsroom-wp/1/2023/11/Artists-US-LAVENDER_1x1.png"
      subTitle="Top 10"
      rounded="rounded"
    />
  </CardListSection>
  <CardListSection title="Audiobook"
    ><Card
      title="Metro urban"
      picture-url="https://storage.googleapis.com/pr-newsroom-wp/1/2023/09/Commute-read_blue.jpg"
      subTitle="Gialli,Lounge,Drama"
      rounded="rounded-full"
    /><Card
      title="Her"
      picture-url="https://storage.googleapis.com/pr-newsroom-wp/1/2023/09/On-the-go-read_green-scaled.jpg"
      subTitle="Femminism,Series"
      rounded="rounded-full"
    /><Card
      title="Travel"
      picture-url="https://storage.googleapis.com/pr-newsroom-wp/1/2023/11/Social_2.png"
      subTitle="Adventures"
      rounded="rounded-full"
    /><Card
      title="Romance"
      picture-url="https://storage.googleapis.com/pr-newsroom-wp/1/2023/11/Social_3.png"
      subTitle="Partner,sex"
      rounded="rounded-full"
    />
    <Card
      title="On the Beach"
      picture-url="https://storage.googleapis.com/pr-newsroom-wp/1/2023/09/Beach-reads_blue.jpg"
      subTitle="True Crime"
      rounded="rounded-full"
    />
    </CardListSection
  >
  <CardListSection title="Podcast di tendenza"
    ><Card
      title="Spotify for Podcaster"
      picture-url="https://storage.googleapis.com/pr-newsroom-wp/1/2023/03/Spotify-for-Podcasters-1.png"
      subTitle="News internazionali"
      rounded="rounded"
    /><Card
      title="Sean Michon podcast"
      picture-url="https://storage.googleapis.com/pr-newsroom-wp/1/2023/01/Credit_Spotify_Sean-Michon_3.jpg"
      subTitle="Tutto sulla musica"
      rounded="rounded"
    /><Card
      title="Spotify Campus"
      picture-url="https://storage.googleapis.com/pr-newsroom-wp/1/2023/01/SpotifyCampus_13.jpg"
      subTitle="Attualità"
      rounded="rounded"
    /><Card
      title="Accademy per News"
      picture-url="https://storage.googleapis.com/pr-newsroom-wp/1/2023/01/SpotifyCampus_20.jpg"
      subTitle="News"
      rounded="rounded"
    />
    </CardListSection
  >
</template>
