/*
   * defineEventHandler
   *
   * ref: https://nuxt.com/docs/guide/directory-structure/server#server-directory
   * 
   * Nuxt automatically scans files inside 
   *   ~/server/api,
   *   ~/server/routes, and
   *   ~/server/middleware
   * 
   * to register API and server handlers
   * with HMR support. Each file should export a 
   * default function defined with defineEventHandler().
   * The handler can return JSON data, a Promise or 
   * use event.node.res.end() to send response.
   *
   */


export default defineEventHandler(async (event) => {
  const { code } = event.context.params;
  const { currencyAPIURL, currencyAPIKey } = useRuntimeConfig();
  const uri = `${currencyAPIURL}${currencyAPIKey}&currencies=${code}`;


  const { data } = await $fetch(uri);

  return data;
});