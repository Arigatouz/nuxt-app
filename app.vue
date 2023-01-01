<template>
  <NuxtLayout>
    <nuxt-page />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate:(titleChunk)=>{
    return titleChunk ? `${titleChunk} my-movie-site` : 'my-movie-site'
  },
  meta:[
    { property: "og:image", content: './public/images/image.png' }
  ]
})
</script>