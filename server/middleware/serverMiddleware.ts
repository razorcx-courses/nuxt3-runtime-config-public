export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  console.log("Config from Server Middleware:", config);
  event.req.headers.authorization = config.apiSecret; // + "abc";
});
