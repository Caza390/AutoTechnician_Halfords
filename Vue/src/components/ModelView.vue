<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const category = ref(Array.isArray(route.params.category) ? route.params.category[0] : route.params.category);
const make = ref(Array.isArray(route.params.make) ? route.params.make[0] : route.params.make);
const models = ref<{ Make: string; Model: string; Year: string; Image: string }[]>([]);

const loadModels = async () => {
  try {
    const allModels = (await import("../components/Data/Models")).default;
    models.value = allModels.filter((model) =>
      typeof model.Make === "string" && model.Make.toLowerCase() === make.value?.toLowerCase()
    );
  } catch (error) {
    console.error("Error loading models:", error);
    models.value = [];
  }
};

watch(
  () => [route.params.category, route.params.make],
  ([newCategory, newMake]) => {
    category.value = Array.isArray(newCategory) ? newCategory[0] : newCategory;
    make.value = Array.isArray(newMake) ? newMake[0] : newMake;
    loadModels();
  }
);

onMounted(loadModels);
</script>

<template>
  <div class="absolute top-8 right-6">
    <RouterLink :to="'/vehicle-select'" class="bg-red-500 px-4 py-2 rounded-lg shadow-md hover:bg-red-700">
      Return
    </RouterLink>
  </div>

  <main class="flex flex-col items-center p-10">
    <h1 class="text-3xl font-bold mb-5">
      {{
        typeof make === "string"
          ? make.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase())
          : "Unknown Make"
      }}
    </h1>

    <div v-if="models.length > 0" class="grid grid-cols-4 gap-8">
      <RouterLink v-for="model in models" :key="model.Model"
        :to="`/vehicle-select/${make}/${model.Model.toLowerCase()}/${model.Year}`"
        class="bg-halfords-orange-400 w-72 h-72 p-4 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-halfords-orange-300 border border-black flex items-center justify-center">
          <img :src="model.Image" :alt="model.Model" class="w-full h-full object-contain" />
        </div>
        <p class="mt-3 font-bold text-black text-3xl text-center">{{ model.Model }}</p>
        <p class="mt-3 font-bold text-black text-3xl text-center">{{ model.Year }}</p>
      </RouterLink>
    </div>

    <div v-else>
      <p class="text-red-500 text-lg mb-4">No Data Provided</p>
      <RouterLink :to="'/vehicle-select'" class="bg-red-500 px-4 py-2 rounded-lg shadow-md hover:bg-red-700">Return
      </RouterLink>
    </div>
  </main>
</template>
