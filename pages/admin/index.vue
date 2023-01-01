<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
})
</script>

<template>
  <div>
    <h1>this is the admin page</h1>
    <p>to change the response and not going too the /admin remember to convert the boolean isUserLogged in the auth to false</p>
    <nuxt-link to="/">Go Home</nuxt-link>
  </div>
</template>

<style scoped></style>
