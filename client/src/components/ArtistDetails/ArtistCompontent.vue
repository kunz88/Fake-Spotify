<script setup lang="ts">


import {store} from "../../store"

defineProps({
  title: String,
  text: String,
  duration: Number,
  pictureUrl: String,
  musicalGenre: String,
  artist: String,
  otherSongs: Array,
});






// funznione utilizzata per aggiungere o rimuovere una canzone nella lista dei preferiti
const addFavourite = (item:string) => {

  // se la canzone è gia presente nella lista viene rimossa
  if(store.listFavourites.includes(item)){ // store.listfavourites è la lista presente all'interno dello store
    const indexItem = store.listFavourites.indexOf(item)
    store.listFavourites.splice(indexItem,1)

  }
  // altrimenti viene aggiunta
  else{
    store.listFavourites.push(item)
  }
}



</script>

<template>
  <div class="hero min-h-96 bg-gradient-to-r from-stone-500 gray-900">
    <div class="hero-content flex-col lg:flex-row-reverse justify-self-start">
      <img :src="pictureUrl" class="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <p class="flex mb-1 text-sm text-white">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7641/7641727.png"
            class="rounded-lg w-6"
          />Artista verificato
        </p>
        <h1 class="text-8xl font-bold text-white">{{ artist }}</h1>
        <p class="py-6 text-4xl font-bold">
          {{ musicalGenre }}
        </p>
      </div>
    </div>
  </div>
  <div class="flex p-4 gap-4 border-gray-900 border-t-2 border-solid">
    <button class="btn btn-primary join-item btn-player">
      <font-awesome-icon :icon="['fas', 'play']" size="xl" />
    </button>
    <button class="btn btn-outline">Segui</button>
    <button class="disabled" tabindex="-1" aria-disabled="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
  </div>
  <h2 class="text-2xl font-bold text-white p-4 mb-3">Popolari</h2>
  <div class="overflow-x-auto">
    <table class="table mb-3">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Titolo</th>
          <th>views</th>
          <th>Durata</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr
          v-for="(song, index) in otherSongs"
          :key="index"
          class="hover:bg-slate-500"
          @click="() => addFavourite(song as string)"
        >
          <th>{{ index + 1 }}</th>
          <td>{{ song }}</td>
          <td>{{ (index + 1) * Math.floor(Math.random() * 1000000) }}</td>
          <td>
            {{ ((index + 1) * Math.floor(Math.random() * 100 + 100)) / 100 }}
          </td>
          <td>
            <a 
              ><font-awesome-icon
                :icon="
                ['fas', 'heart']
                "
            /></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
