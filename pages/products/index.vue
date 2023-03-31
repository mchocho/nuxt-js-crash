<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <template v-for="(product, index) in products" :key="index">
          <NuxtLink :to="`/products/${product.id}`">{{product.title}}</NuxtLink>
      </template>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: "items"
  });

  /*
   *
   * useFetch
   * 
   * ref: https://nuxt.com/docs/api/composables/use-fetch
   * 
   * A composable which provides a convenient wrapper 
   * around useAsyncData and $fetch
   */

  const { data: products } = await useFetch('https://fakestoreapi.com/products');

  console.log(products);

</script>

<style>

</style>