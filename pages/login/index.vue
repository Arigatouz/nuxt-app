<template>
  <div>
    <h1>this is the login page</h1>
    <nuxt-link to="/">Go Home</nuxt-link>
  </div>
  <form>
    <label>User Name
      <input type="text" name="username" />
    </label>
    <label>Password
      <input type="password" name="password" />
    </label>
  </form>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Login',

  layout: "plain",
  transition: "fade",
  layoutTransition: true,
})
useHead({
  meta: [
    { name: 'description', content: 'Login page' },
    { property: 'og:title', content: 'Login' },
    { property: 'og:description', content: 'Login page' },
    { property: 'og:image', content: 'https://picsum.photos/200/300' },
    { property: 'og:image:width', content: '200' },
    { property: 'og:image:height', content: '300'},
    {name: 'twitter:card', content: 'summary_large_image'},
    {name: 'twitter:site', content: '@nuxt_js'},
    {name: 'twitter:creator', content: '@nuxt_js'},
    {name: 'twitter:title', content: 'Login'},
    {name: 'twitter:description', content: 'Login page'},
    {name: 'twitter:image', content: 'https://picsum.photos/200/300'},
    

  ],
})
</script>