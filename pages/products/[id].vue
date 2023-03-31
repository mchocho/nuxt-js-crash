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
      <ProductDetails :product="product" />
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
    /*
     * createError
     *
     * Ref1: https://nuxt.com/docs/getting-started/error-handling#createerror
     * Ref2: https://nuxt.com/docs/api/utils/create-error#createerror
     * 
     * Use this function to create an error object with additional metadata.
     * The fatal property
     * 
     * You can also use showError to force the user to the error screen.
     * 
     * useError will return the global Nuxt error that is being handled.
     */ 
  
    throw createError({ statusCode: 404, statusMessage: "Product not found", fatal: true });
  }

  definePageMeta({
    layout: "items"
  });
 </script>
 
 <style scoped>
 
 </style>