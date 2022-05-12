import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
//   runtimeConfig: {
//     // The private keys which are only 
//     // available within server-side
//     apiSecret: "123",

//     // Keys within public, will be also be
//     // exposed to the client-side
//     public: {
//       apiBase: "/api",
//     },
//   },

  runtimeConfig: {
    // The private keys which are only 
    // available within server-side
    apiSecret: process.env.API_SECRET,

    // Keys within public, will be also be
    // exposed to the client-side
    public: {
        firebaseApiKey: process.env.FIREBASE_API_KEY,
    },
  },
});
