<template>
  <div class="card m-4 p-4 is-flex is-flex-direction-column">
    <h1 class="title is-3 my-3 has-text-centered">Nuxt3 - Runtime Config</h1>
    <div class="m-4">
      <client-only>
        <p>
          <b>apiSecret <br />(private - server side)</b>
        </p>
        <p class="mt-3 p-3 has-background-danger has-text-white">
          {{ runtimeConfig.apiSecret ? runtimeConfig.apiSecret : "undefined" }}
        </p>
        <br />
        <p>
          <b>public.firebaseApiKey <br />(public - client side)</b>
        </p>
        <p class="mt-3 p-3 has-background-success">
          {{ runtimeConfig.public.firebaseApiKey }}
        </p>
      </client-only>
      <div class="mt-4">
        <p>
          <b>Firebase Key <br />(fetched from Server/API)</b>
        </p>
        <p class="mt-3 p-3 has-background-primary">
          {{ message }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
  // or middleware: 'auth'
});

const runtimeConfig = useRuntimeConfig();

// console.log(runtimeConfig.apiSecret);
// console.log(runtimeConfig.public.apiBase);

console.log(runtimeConfig.apiSecret);
console.log(runtimeConfig.public.firebaseApiKey);

const message = ref();
onMounted(async () => {
  message.value = await $fetch("/api/firebasekey", {
    headers: {
      firebaseapikey: runtimeConfig.public.firebaseApiKey,
    },
  });
});
</script>

<style scoped>
.card {
  min-height: 50vh;
}
</style>
