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

  const { passphrase } = getQuery(event);

  /*
   * readBody
   *
   * ref2: https://www.jsdocs.io/package/h3#readBody
   * 
   * A built-in function that reads the request body 
   * and tries to safely parse it
   * 
   * useBody function is no longer supported.
   * 
   */


  const { secretMove } = await readBody(event);

  return {
    message: `Passphrase is ${passphrase}, `
  };
});