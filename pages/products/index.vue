<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <template v-for="(product, index) in products" :key="index">
        <ProductCard :product="product" />
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

  /*
   * useHead
   *
   * ref: https://nuxt.com/docs/api/composables/use-head#usehead
   * 
   * 
   * This function allows you to manage your head 
   * tags in a programmatic and reactive way.
   * 
   * Customise your head tags on the fly.
   *
   */

   useHead({
    title: 'Our Products | Merch',
    meta: [
      { name: 'description', content: 'Liquid store merch' }
    ]
   });


</script>

<style>

</style>