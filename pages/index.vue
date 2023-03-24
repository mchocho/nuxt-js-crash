<template>
  <div>
    <header>
      <nav>
        <NuxtLink>Nuxt Dojo</NuxtLink>  
        <ul>
          <!-- 
            <NuxtLink> component

            ref: https://nuxt.com/docs/api/components/nuxt-link#nuxtlink

            NuxtLink determines whether the link is internal or external 
            and renders it accordingly with available optimizations
            (prefetching, default attributes, etc).

            It's a replacement for the <a> and <RouterLink> tags and performs
            faster.
          -->
            <li>
            <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/products">Products</NuxtLink>
            </li>

            <li>
              <a href="/about">About (anchor link for comparison)</a>
            </li>
        </ul>
      </nav>
    </header>
    
    
    <h2>Home</h2>
    
    <p>In this Nuxt lesson, you'll learn how to make page components, which Nuxt then automatically creates routes for. ⭐⭐ Watch the whole course now (without ads) on Net Ninja Pro:</p>
    
    <p>In this Nuxt lesson, you'll learn how to make page components, which Nuxt then automatically creates routes for. ⭐⭐ Watch the whole course now (without ads) on Net Ninja Pro:</p>
  </div>
</template>

<script>

</script>


<style>
 h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }

  p {
    margin: 20px 0
  }
</style>