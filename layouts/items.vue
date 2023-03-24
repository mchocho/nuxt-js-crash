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
    <header>
      <nav>
        <NuxtLink to="/products">Nuxt Dojo Merch</NuxtLink>  
      </nav>
    </header>
    
    <!-- 
      We want to output page content over here
      This can be done using the slot component.

      The slot component will out the content of a page
      provided in the pages directory if the route link
      matches.
    -->

    <div>
      <slot />
    </div>

    <footer>
      <ul>
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