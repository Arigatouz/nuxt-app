export default defineNuxtRouteMiddleware((to, from)  =>{
  const isUserLoggedIn: boolean = false;
  if (!isUserLoggedIn) {
    return navigateTo({ path: "/login" });
  }
});
