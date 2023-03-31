<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.image" :alt="`image of ${product.title}`" class="mx-auto my-7"/>
      </div>
      <div class="p-7">
        <div class="mr-2">
          <h2 class="text-4xl my-7">{{ product.title }}</h2>
          <p class="text-xl my-7">Only ${{ product.price }}</p>
        </div>

        <button class="btn flex">
          <i class="material-icons mr-2 ">add_shopping_cart</i>
          <span>Add to cart</span>
        </button>

        <div class="mt-5">
          <h3>Product description</h3>
          <p>{{ product.description }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
  const { product } = defineProps(['product']);

</script>

<style scoped>
  img {
    max-width: 400px;
  }
</style>
