<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const make = ref(route.params.make);
const model = ref(route.params.model);
const year = ref(route.params.year);
const type = ref(route.params.type);
const availableTypes = ref<any[]>([]);
const speakers = ref<any[]>([]);
const showTypes = ref(false);

const loadSpeakerData = async () => {
  try {
    // Ensure params are treated as strings
    const makeValue = String(make.value);
    const modelValue = String(model.value);
    const yearValue = String(year.value);
    const typeValue = type.value ? decodeURIComponent(String(type.value)).trim() : "";

    console.log("Parameters:", { makeValue, modelValue, yearValue, typeValue });

    // Load available kit types
    const allTypes = (await import("./Data/Type/SpeakersType")).default;
    const matchedTypes = allTypes.filter(
      (t) =>
        t.Make.toLowerCase() === makeValue.toLowerCase() &&
        t.Model.toLowerCase() === modelValue.toLowerCase() &&
        t.Year === yearValue
    );

    showTypes.value = matchedTypes.length > 0;
    availableTypes.value = matchedTypes;

    console.log("Matched Kit Types:", availableTypes.value);

    // Load speaker results
    const allSpeakers = (await import("./Data/Results/SpeakersResults")).default;
    let matchedSpeakers = allSpeakers.filter(
      (r) =>
        r.Make.toLowerCase() === makeValue.toLowerCase() &&
        r.Model.toLowerCase() === modelValue.toLowerCase() &&
        r.Year === yearValue
    );

    console.log("Matched Speakers before type filtering:", matchedSpeakers);

    // If a type is selected, filter speakers based on KitType
    if (typeValue) {
      matchedSpeakers = matchedSpeakers.filter((r) => {
        const kitType = r.KitType ? r.KitType.toLowerCase().trim() : "";
        console.log(`Comparing "${kitType}" with "${typeValue.toLowerCase().trim()}"`);
        return kitType === typeValue.toLowerCase().trim();
      });
    }

    console.log("Filtered Speakers after type filtering:", matchedSpeakers);

    speakers.value = matchedSpeakers;
  } catch (error) {
    console.error("Error loading speaker data:", error);
    speakers.value = [];
    showTypes.value = false;
  }
};

onMounted(loadSpeakerData);

// Watch for changes in the route parameters
watch(() => route.params, () => {
  make.value = route.params.make;
  model.value = route.params.model;
  year.value = route.params.year;
  type.value = route.params.type;
  loadSpeakerData(); // Reload the data when route changes
});
</script>

<template>
  <div class="absolute top-8 right-6">
    <RouterLink :to="`/vehicle-select/${make}/${model}/${year}`"
      class="bg-red-500 px-4 py-2 rounded-lg shadow-md hover:bg-red-700">
      Return
    </RouterLink>
  </div>

  <!-- Add the key to the root element to force re-render when route changes -->
  <main :key="route.path" class="flex flex-col items-center p-10">
    <h1 class="text-3xl font-bold mb-5">
      {{ String(make).replace("-", " ").toUpperCase() }} /
      {{ String(model).replace("-", " ").toUpperCase() }} /
      {{ year }} / Speakers
    </h1>

    <!-- Step 1: Show Kit Type Selection -->
    <div v-if="showTypes && !type" class="grid grid-cols-4 gap-8">
      <RouterLink v-for="kit in availableTypes" :key="kit.id"
        :to="`/speakers/${make}/${model}/${year}/${kit.KitType.toLowerCase().replace(/\s+/g, '-')}`"
        class="bg-gray-200 w-64 h-64 p-4 rounded-lg flex flex-col items-center hover:bg-gray-300">
        <img :src="kit.KitImage" :alt="kit.KitType" class="w-30 h-30 py-4 object-contain" />
        <p class="mt-3 font-bold text-black text-3xl">{{ kit.KitType }}</p>
        <p class="text-gray-600">{{ kit.Description }}</p>
      </RouterLink>
    </div>

    <!-- Step 2: Show speaker Results if Type is Selected OR No Type Exists -->
    <div v-if="speakers.length > 0 && (!showTypes || type)" class="grid grid-cols-4 gap-8">
      <div v-for="speaker in speakers" :key="speaker.id"
        :to="`/speakers/${make}/${model}/${year}/${type ? type + '/' : ''}${speaker.Part.toLowerCase()}`"
        class="bg-halfords-orange-400 w-64 h-64 p-4 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <img :src="speaker.PartImage" :alt="speaker.Part" class="w-30 h-30 py-4 object-contain" />
        <p class="mt-3 font-bold text-black text-3xl">{{ speaker.Part }}</p>
        <p class="text-gray-600">{{ speaker.Description }}</p>
      </div>
    </div>

    <!-- Step 3: No Data Available -->
    <div v-else-if="!showTypes">
      <p class="text-red-500 text-lg mb-4">No Data Provided</p>
      <RouterLink to="/" class="border-4 p-1">Return</RouterLink>
    </div>
  </main>
</template>
