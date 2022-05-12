export default defineNuxtRouteMiddleware((to, from) => {
  const config = useRuntimeConfig();
  console.log("Runtime Config in Route (auth) Middleware", config);
});
