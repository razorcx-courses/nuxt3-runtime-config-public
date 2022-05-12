export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  console.log("Runtime Config in Plugin", config);
});
