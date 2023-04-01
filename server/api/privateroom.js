export default defineEventHandler((event) => {

  /*
   * getQuery
   *
   * ref: https://www.jsdocs.io/package/h3#getQuery
   * 
   * A built-in method that allows us to extract all
   * the route parameters.
   * 
   * useQuery method is no longer supported.
   * 
   */

  const { passphrase } = getQuery(event);

  return {
    message: `Passphrase is ${passphrase}`
  };
});