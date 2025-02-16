<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const category = ref(route.params.category);
const make = ref(route.params.make);
const model = ref(route.params.model);
const years = ref<any[]>([]);

const loadYears = async () => {
  try {
    let allYears: Array<{ id: string; category: string; Make: string; Model: string; Year: string; Logo: string }> = [];

    switch (category.value) {
      case "dash-camera":
        allYears = (await import("./Data/Years/DashCameraYears")).default;
        break;
      case "audio":
        allYears = (await import("./Data/Years/AudioYears")).default;
        break;
      case "speakers":
        allYears = (await import("./Data/Years/SpeakersYears")).default;
        break;
      default:
        allYears = [];
    }

    years.value = allYears.filter(
      (year) =>
        year.Make.toLowerCase() === String(make.value).toLowerCase() &&
        year.Model.toLowerCase() === String(model.value).toLowerCase()
    );

  } catch (error) {
    console.error("Error loading years:", error);
    years.value = [];
  }
};

onMounted(loadYears);
watch(() => [route.params.category, route.params.make, route.params.model], loadYears);
</script>

<template>
  <main class="flex flex-col items-center p-10">
    <h1 class="text-3xl font-bold mb-5">
      {{typeof category === "string"
        ? category.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase())
        : "Unknown Category"
      }}
      -
      {{typeof make === "string"
        ? make.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase())
        : "Unknown Make"
      }}
      -
      {{typeof model === "string"
        ? model.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase())
        : "Unknown Model"
      }}
    </h1>

    <div v-if="years.length > 0" class="grid grid-cols-3 gap-5">
      <RouterLink v-for="year in years" :key="year.id" :to="`/${category}/${make}/${model}/${year.Year}`"
        class="bg-halfords-orange-400 w-64 h-64 p-4 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <img :src="year.Logo" :alt="year.Year" class="w-24 h-24 object-contain" />
        <p class="mt-3 font-bold text-black">{{ year.Year }}</p>
      </RouterLink>
    </div>

    <div v-else>
      <p class="text-red-500 text-lg mb-4">No Data Provided</p>
      <RouterLink to="/" class="border-4 p-1">Return</RouterLink>
    </div>
  </main>
</template>
