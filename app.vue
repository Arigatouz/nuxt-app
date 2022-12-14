<template>
  <div style="display: flex; width: 500px ;justify-content: space-around">
    <nuxt-link to="/">home page</nuxt-link>
    <nuxt-link to="/movies">movies</nuxt-link>
    <nuxt-link to="/teams/boom/users/5214">user 5214</nuxt-link>
    <nuxt-link to="https://www.google.com">google</nuxt-link>
  </div>
    <nuxt-page />
</template>

<script setup lang="ts">
useHead({
  titleTemplate:(titleChunk)=>{
    return titleChunk ? `${titleChunk} my-movie-site` : 'my-movie-site'
  },
  meta:[
    { property: "og:image", content: '/images/image.png' }
  ]
})
</script>