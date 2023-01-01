<script lang="ts" setup>

import {ref} from "vue";

const title = ref('movies')
const query = ref('avengers')
const movies = ref([])
const errorName = ref()
const searchMovies = async ()   => {
  const response:any = await $fetch(`http://www.omdbapi.com/?apikey=57a11b40&s=${query.value}`)
  movies.value = response.Search
  errorName.value = query.value
}

searchMovies()
</script>

<template>
  <div>
    <h1>
      Page: {{ title }} page
    </h1>
    <form @submit.prevent="searchMovies">
      <input type="text" v-model="query"/>
      <button type="submit">Search</button>
    </form>
    <div v-if="!movies"> NO Movies Found with the Name {{errorName}}</div>
    <ul v-else style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none">
      <li v-for="movie in movies" :key="movie.imdbID">
        <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
          <img :src="movie.Poster" :alt="movie.title" width="100"/>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
