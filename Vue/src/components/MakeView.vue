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

  <main class="flex justify-center items-center p-20">
    <div class="grid grid-cols-4 gap-8">
      <RouterLink v-for="make in makes" :key="make.id" :to="`/vehicle-select/${make.Make.toLowerCase()}`"
      class="bg-halfords-orange-400 w-72 h-72 p-4 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-white border border-black flex items-center justify-center">
          <img :src="make.Image" :alt="make.Make" class="w-full h-full object-contain" />
        </div>
        <p class="mt-3 font-bold text-black text-3xl text-center">{{ make.Make }}</p>
      </RouterLink>
    </div>
  </main>
</template>
