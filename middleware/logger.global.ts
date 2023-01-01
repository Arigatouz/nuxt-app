export default defineNuxtRouteMiddleware((to, from) => {
  console.log(from.fullPath ,to.fullPath , 'from middleware')
})
