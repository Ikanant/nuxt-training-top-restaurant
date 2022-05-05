<script setup lang="ts">
import restaurants from "@/data.json"

// Inside of NUXT we have composables
// Composables are places where we can store global state
// They usually start with the word USE
const route = useRoute();
const name = route.params.name;
const restaurant = restaurants.find(r => r.name === name);
</script>

<template>
  <div>
      {{ restaurant }}
  </div>
</template>