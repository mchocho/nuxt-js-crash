/*
 * Dynamic Routes
 *
 * ref: https://nuxt.com/docs/guide/directory-structure/pages/#dynamic-routes
 *
 * If you place anything within square brackets, 
 * it will be turned into a dynamic route parameter.
 * You can mix and match multiple parameters and 
 * even non-dynamic text within a file name or 
 * directory.
 *
 * If you want a parameter to be optional, you must 
 * enclose it in double square brackets
 *
 */

 <template>
    <div>
      <p>{{ product.title }}</p>
      <p>${{ product.price }}</p>

      <hr />
      <br />

      <p>{{ product.description }}</p>
    </div>
 </template>
 
<script setup>
  /*
  * 
  * You can access group/id within your 
  * component via the $route object
  * 
  */
  const { id } = useRoute().params;

  const { data: product } = await useFetch(`https://fakestoreapi.com/products/${id}`, { key: id });

  if (!product.value) {
    //
    throw createError({});
  }

  definePageMeta({
    layout: "items"
  });
 </script>
 
 <style scoped>
 
 </style>