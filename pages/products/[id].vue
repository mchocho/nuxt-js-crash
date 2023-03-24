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
      <p>Product details for {{id}}</p>

      <p>In this Nuxt lesson, you'll learn how to make page components, which Nuxt then automatically creates routes for. ⭐⭐ Watch the whole course now (without ads) on Net Ninja Pro:</p>

      <!-- <p>useRoute() = {{useRoute()}}</p> -->
    </div>
 </template>
 
<script>
definePageMeta({
  layout: "items"
});

export default {
    setup () {
        return {
         /*
         * 
         * You can access group/id within your 
         * component via the $route object
         * 
         */
         id: useRoute().params.id
        }
    }
 }
 </script>
 
 <style scoped>
 
 </style>