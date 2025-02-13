<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const category = ref(route.params.category);
const make = ref(route.params.make);
const models = ref<any[]>([]);

const loadModels = async () => {
  try {
    let allModels: Array<{ id: string; category: string; Make: string; Model: string; Logo: string }> = [];

    switch (category.value) {
      case "dash-camera":
        allModels = (await import("./Data/Models/DashCameraModels")).default;
        break;
      case "audio":
        allModels = (await import("./Data/Models/AudioModels")).default;
        break;
      case "speakers":
        allModels = (await import("./Data/Models/SpeakersModels")).default;
        break;
      default:
        allModels = [];
    }

    models.value = allModels.filter(
      (model) => model.Make.toLowerCase() === String(make.value).toLowerCase()

    );
  } catch (error) {
    console.error("Error loading models:", error);
    models.value = [];
  }
};

onMounted(loadModels);
watch(() => [route.params.category, route.params.make], loadModels);
</script>

<template>
  <main class="flex flex-col items-center p-10">
    <h1 class="text-3xl font-bold mb-5">
  {{ typeof category === "string" 
      ? category.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase()) 
      : "Unknown Category" 
  }} 
  - 
  {{ typeof make === "string" 
      ? make.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase()) 
      : "Unknown Make" 
  }}
</h1>


    <div v-if="models.length > 0" class="grid grid-cols-3 gap-5">
      <RouterLink 
        v-for="model in models" 
        :key="model.id" 
        :to="`/${category}/${make}/${model.Model.toLowerCase()}`"
        class="bg-halfords-orange-400 w-64 h-64 p-4 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500"
      >
        <img :src="model.Logo" :alt="model.Model" class="w-24 h-24 object-contain" />
        <p class="mt-3 font-bold text-black">{{ model.Model }}</p>
      </RouterLink>
    </div>

    <div v-else>
      <p class="text-red-500 text-lg mb-4">No Data Provided</p>
      <RouterLink to="/" class="border-4 p-1">Return</RouterLink>
    </div>
  </main>
</template>
