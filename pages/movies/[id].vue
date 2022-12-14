<script lang="ts" setup>

const route = useRoute()
// const {data} = useAsyncData(`/movies/${route.params.id}`,()=>{
//   return  $fetch(`http://www.omdbapi.com/?apikey=57a11b40&i=${route.params.id}`)
//  } , {
//   // transform(data :any) {
//   //   return data.Title + ' Ali Gamal Ali'
//   // }
//   // pick:['Title' , 'Plot']
// })

// shorthand for the above function

const {data, error} = await useFetch(`http://www.omdbapi.com/?apikey=57a11b40&i=${route.params.id}`,
    {
      pick: ['Title', 'Plot','Poster', 'Error'],
      key: `/movies/${route.params.id}`
    }
);

if (data.value.Error === 'Incorrect IMDb ID.') {
  showError({statusCode: 400, message: 'Movie is not found'})
}

if (error.value) {
  showError({statusCode: 500, message: 'Oh No server Error'})
}

useHead({
  title : data.value.Title,
  meta: [
    { name: "description", content: data.value.Plot },
    { property: "og:description", content: data.value.Plot },
    {property: "og:title" , content: data.value.Title},
    { property: "og:image", content: data.value.Poster },
    { name: "twitter:card", content: `summary_large_image` },
    { name: "twitter:image", content: data.value.Poster },
    { name: "twitter:title", content: data.value.Title },
    { name: "twitter:description", content: data.value.Plot },
    

  ],
})
</script>

<template>
  <div style="padding-bottom: 50px">
   <pre>
      {{ data }}
   </pre>
  </div>
</template>

<style scoped></style>
