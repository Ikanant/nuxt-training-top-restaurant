<script setup lang="ts">
import restaurants from "@/data.json";

// Inside of NUXT we have composables
// Composables are places where we can store global state
// They usually start with the word USE
const route = useRoute();
const name = route.params.name;
const restaurant = restaurants.find((r) => r.name === name);
</script>

<template>
  <div class="restaurant-container">
    <div class="image-container">
      <img :src="restaurant.imageUrl" alt="" />
    </div>
    <div class="info-container">
      <h1>{{ restaurant.name }}</h1>
      <div class="stats-container">
        <h5>Revenue (in billions)</h5>
        <p>${{ restaurant.revenue }}</p>
      </div>
      <div class="stats-container">
        <h5>Number of Stores</h5>
        <p>{{ restaurant.numberOfStores }}</p>
      </div>
      <p class="content">{{ restaurant.content }}</p>
    </div>

    <RestaurantAd />
  </div>
</template>
