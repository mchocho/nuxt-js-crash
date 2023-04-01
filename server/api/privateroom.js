export default defineEventHandler(async (event) => {

  /*
   * getQuery
   *
   * ref1: https://nuxt.com/docs/guide/directory-structure/server#server-utilities
   * ref2: https://www.jsdocs.io/package/h3#getQuery
   * 
   * A built-in function that allows us to extract all
   * the route parameters.
   * 
   * useQuery function is no longer supported.
   * 
   */

  // const { passphrase } = getQuery(event);

  /*
   * readBody
   *
   * ref1: https://nuxt.com/docs/guide/directory-structure/server#handling-requests-with-body
   * ref2: https://www.jsdocs.io/package/h3#readBody
   * 
   * A built-in function that reads the request body 
   * and tries to safely parse it
   * 
   * useBody function is no longer supported.
   * 
   */


  // const { secretMove } = await readBody(event);


  /*
   * useRuntimeConfig
   *
   * ref: https://nuxt.com/docs/api/composables/use-runtime-config#useruntimeconfig
   * 
   * A omposable used to expose config variables within your app.
   *
   */

  const { currencyAPIURL, currencyAPIKey } = useRuntimeConfig();



  /*
   * $fetch
   *
   * ref: https://nuxt.com/docs/api/utils/dollarfetch
   * 
   * Nuxt uses ofetch to expose globally the $fetch helper for 
   * making HTTP requests within your Vue app or API routes.
   * 
   * Using $fetch in components without wrapping it 
   * with useAsyncData causes fetching the data twice: 
   * initially on the server, then again on the client-side 
   * during hydration, because $fetch does not transfer state 
   * from the server to the client.
   * 
   */

  const { data } = await $fetch(`${currencyAPIURL}${currencyAPIKey}`);

  return data;
});