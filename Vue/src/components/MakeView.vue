<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const category = ref(route.params.category);
const makes = ref<any[]>([]);

const loadMakes = async () => {
  try {
    switch (category.value) {
      case "dash-camera":
        makes.value = (await import("./Data/Makes/DashCameraMakes")).default;
        break;
      case "audio":
        makes.value = (await import("./Data/Makes/AudioMakes")).default;
        break;
      case "speakers":
        makes.value = (await import("./Data/Makes/SpeakersMakes")).default;
        break;
      default:
        makes.value = [];
    }
  } catch (error) {
    console.error("Error loading makes:", error);
    makes.value = [];
  }
};

onMounted(loadMakes);
watch(() => route.params.category, loadMakes);
</script>

<template>
  <main class="flex flex-col items-center p-10">
    <h1 class="text-3xl font-bold mb-5">
      {{ typeof category === "string"
        ? category.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase())
        : "Unknown Category"
      }}
    </h1>

    <div v-if="makes.length > 0" class="grid grid-cols-3 gap-5">
      <RouterLink v-for="make in makes" :key="make.id" :to="`/${category}/${make.Make.toLowerCase()}`"
        class="bg-halfords-orange-400 w-64 h-64 p-4 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <img :src="make.Logo" :alt="make.Make" class="w-24 h-24 object-contain" />
        <p class="mt-3 font-bold text-black">{{ make.Make }}</p>
      </RouterLink>
    </div>

    <div v-else>
      <p class="text-red-500 text-lg mb-4">No Data Provided</p>
      <RouterLink to="/" class="border-4 p-1">Return</RouterLink>
    </div>
  </main>
</template>
