<script lang="ts" setup>
const route = useRoute()
const message = computed(() =>
    `This is the ${route.params.slugteam} and the user id is ${route.params.userId}`
)
</script>

<template>
  <div>
    <h1>
      Page: {{ message }}
    </h1>
  </div>
</template>

<style scoped></style>
