<!-- 
  We could have called this file products.vue but
  I did so, just to showcase that you also don't
  have to.   
-->

<!-- 

  default.vue will be seen by nuxt as the default
  layout this is a built in feature.

 -->

 <template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4">
        <NuxtLink to="/products" class="font-bold">Nuxt Dojo Merch</NuxtLink>  
      </nav>
    </header>
    
    <!-- 
      We want to output page content over here
      This can be done using the slot component.

      The slot component will out the content of a page
      provided in the pages directory if the route link
      matches.
    -->

    <div class="container mx-auto p-4">
      <slot />
    </div>

    <footer class="container mx-auto p-4 flex justify-between border-t-2">
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </footer>

  </div>
</template>

<style>
  .route-link-exact-active {
    color: #12b488;
  }
</style>