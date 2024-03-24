<script setup lang="ts">
import { store } from '../../store';

</script>


<template>
    <div class="overflow-x-auto h-96 rounded-box mt-2">
      <table class="table table-pin-rows">
        <thead>
          <tr>
            <th>
              <button class="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                La tua Playlist
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in store.listFavourites">
            <td>{{ item }}</td>
          </tr>

        </tbody>
      </table>
    </div>

</template>