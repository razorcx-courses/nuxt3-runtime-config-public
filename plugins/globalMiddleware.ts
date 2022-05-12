export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  addRouteMiddleware(
    "global",
    () => {
      console.log(
        "this global middleware was added in a plugin and will be run on every route change"
      );
      console.log("Runtime Config in Global Middleware", config);
    },
    { global: true }
  );
});
