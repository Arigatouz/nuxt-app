<template>
  <ul style="display: flex; width: 500px ;justify-content: space-around">
    <nuxt-link to="/">home page</nuxt-link>
    <nuxt-link to="/movies">movies</nuxt-link>
    <nuxt-link to="/teams/boom/users/5214">user 5214</nuxt-link>
    <nuxt-link to="/login">LogIn</nuxt-link>
    <nuxt-link to="https://www.google.com" target="_blank">google</nuxt-link>
  </ul>
    <slot></slot>
   
</template>
