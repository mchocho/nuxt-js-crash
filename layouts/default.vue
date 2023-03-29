<!-- 

  default.vue will be seen by nuxt as the default
  layout this is a built in feature.

 -->

 <template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <!-- 
          <NuxtLink> component

          ref: https://nuxt.com/docs/api/components/nuxt-link#nuxtlink

          NuxtLink determines whether the link is internal or external 
          and renders it accordingly with available optimizations
          (prefetching, default attributes, etc).

          It's a replacement for the <a> and <RouterLink> tags and performs
          faster.
        -->
        <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>  
        <ul class="flex gap-4">
          <li>
          <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" class="btn">Products</NuxtLink>
          </li>
        </ul>
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
  </div>
</template>

<style>
  .route-link-exact-active {
    color: #12b488;
  }
</style>