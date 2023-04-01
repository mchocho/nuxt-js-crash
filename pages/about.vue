<template>
  <div>    
    <h2>About</h2>

    <p>In this Nuxt lesson, you'll learn how to make page components, which Nuxt then automatically creates routes for. ⭐⭐ Watch the whole course now (without ads) on Net Ninja Pro:</p>

    <p>In this Nuxt lesson, you'll learn how to make page components, which Nuxt then automatically creates routes for. ⭐⭐ Watch the whole course now (without ads) on Net Ninja Pro:</p>
    
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
  const { data } = await useFetch('/api/privateroom?passphrase=Georgeo', {
    method: 'post',
    body: { secretMove: 'dab' }
  });

</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }

  p {
    margin: 20px 0
  }
</style>
