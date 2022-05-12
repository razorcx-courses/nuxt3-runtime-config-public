export default defineEventHandler((event) => {
  const config = useRuntimeConfig();

  const headers = event.req.headers;
  console.log(
    "Header Authorization (FIREBASE KEY):",
    headers.firebaseapikey,
    config.public.firebaseApiKey
  );

  if (headers.firebaseapikey == config.public.firebaseApiKey) {
    return "You are authorized";
  } else {
    return "Access denied!";
  }
});
