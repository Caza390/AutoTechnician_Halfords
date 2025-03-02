<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const category = ref(route.params.category);
const makes = ref<any[]>([]);

const loadMakes = async () => {
  try {
    makes.value = (await import("../components/Data/Makes")).default;
  } catch (error) {
    console.error("Error loading makes:", error);
    makes.value = [];
  }
};

// Watch for changes in the route
watch(() => route.params.category, (newCategory) => {
  category.value = newCategory;
  loadMakes();
});

onMounted(loadMakes);
</script>

<template>
  <div class="absolute top-8 right-6">
    <RouterLink :to="`/`" class="bg-red-500 px-4 py-2 rounded-lg shadow-md hover:bg-red-700">
      Return
    </RouterLink>
  </div>

  <main class="flex flex-col items-center p-10">
    <!-- Category Makes -->
    <div v-if="makes.length > 0" class="grid grid-cols-4 gap-8">
      <RouterLink 
        v-for="make in makes" 
        :key="make.id" 
        :to="`/vehicle-select/${make.Make.toLowerCase()}`"
        class="bg-halfords-orange-400 w-64 h-64 p-4 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <img :src="make.Image" :alt="make.Make" class="w-28 h-28 py-4 object-contain" />
        <p class="mt-3 font-bold text-black text-3xl">{{ make.Make }}</p>
      </RouterLink>
    </div>

    <div v-else>
      <p class="text-red-500 text-lg mb-4">No Data Provided</p>
      <RouterLink to="/" class="border-4 p-1">Return</RouterLink>
    </div>
  </main>
</template>
