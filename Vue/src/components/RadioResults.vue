<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const make = ref(route.params.make);
const model = ref(route.params.model);
const year = ref(route.params.year);
const type = ref(route.params.type);
const availableTypes = ref<any[]>([]);
const radios = ref<any[]>([]);
const showTypes = ref(false);

const loadRadioData = async () => {
  try {
    // Ensure params are treated as strings
    const makeValue = String(make.value);
    const modelValue = String(model.value);
    const yearValue = String(year.value);
    const typeValue = type.value ? decodeURIComponent(String(type.value)).trim() : "";

    console.log("Parameters:", { makeValue, modelValue, yearValue, typeValue });

    // Load available kit types
    const allTypes = (await import("./Data/Type/RadioType")).default;
    const matchedTypes = allTypes.filter(
      (t) =>
        t.Make.toLowerCase() === makeValue.toLowerCase() &&
        t.Model.toLowerCase() === modelValue.toLowerCase() &&
        t.Year === yearValue
    );

    showTypes.value = matchedTypes.length > 0;
    availableTypes.value = matchedTypes;

    console.log("Matched Kit Types:", availableTypes.value);

    // Load radio results
    const allRadios = (await import("./Data/Results/RadioResults")).default;
    let matchedRadios = allRadios.filter(
      (r) =>
        r.Make.toLowerCase() === makeValue.toLowerCase() &&
        r.Model.toLowerCase() === modelValue.toLowerCase() &&
        r.Year === yearValue
    );

    console.log("Matched Radios before type filtering:", matchedRadios);

    // If a type is selected, filter radios based on KitType
    if (typeValue) {
      matchedRadios = matchedRadios.filter((r) => {
        const kitType = r.KitType ? r.KitType.toLowerCase().trim() : "";
        console.log(`Comparing "${kitType}" with "${typeValue.toLowerCase().trim()}"`);
        return kitType === typeValue.toLowerCase().trim();
      });
    }

    console.log("Filtered Radios after type filtering:", matchedRadios);

    radios.value = matchedRadios;
  } catch (error) {
    console.error("Error loading Radio data:", error);
    radios.value = [];
    showTypes.value = false;
  }
};

onMounted(loadRadioData);

// Watch for changes in the route parameters
watch(() => route.params, () => {
  make.value = route.params.make;
  model.value = route.params.model;
  year.value = route.params.year;
  type.value = route.params.type;
  loadRadioData(); // Reload the data when route changes
});
</script>

<template>
  <div class="absolute top-8 right-6">
    <RouterLink :to="`/radio/${make}`" class="bg-red-500 px-4 py-2 rounded-lg shadow-md hover:bg-red-700">
      Return
    </RouterLink>
  </div>

  <main class="flex flex-col items-center p-10">
    <h1 class="text-3xl font-bold mb-5">
      {{ String(make).replace("-", " ").toUpperCase() }} /
      {{ String(model).replace("-", " ").toUpperCase() }} /
      {{ year }}
    </h1>

    <!-- Step 1: Show Kit Type Selection -->
    <div v-if="showTypes && !type" class="grid grid-cols-4 gap-8">
      <RouterLink v-for="kit in availableTypes" :key="kit.id"
        :to="`/vehicle-select/${make}/${model}/${year}/audio/${kit.KitType.toLowerCase().replace(/\s+/g, '-')}`"
        class="bg-halfords-orange-400 w-64 h-64 p-4 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-halfords-orange-300 border border-black flex items-center justify-center">
          <img :src="kit.KitImage" :alt="kit.KitType" class="w-full h-full object-contain" />
        </div>
        <p class="mt-3 font-bold text-black text-3xl text-center">{{ kit.KitType }}</p>
        <p class="text-gray-600 text-center">{{ kit.Description }}</p>
      </RouterLink>
    </div>

    <!-- Step 2: Show Radio Results if Type is Selected OR No Type Exists -->
    <div v-if="radios.length > 0 && (!showTypes || type)" class="grid grid-cols-4 gap-8">
      <div v-for="radio in radios" :key="radio.id"
        class="bg-halfords-orange-400 w-64 h-64 p-4 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-halfords-orange-300 border border-black flex items-center justify-center">
          <img :src="radio.PartImage" :alt="radio.Part" class="w-full h-full object-contain" />
        </div>
        <p class="mt-3 font-bold text-black text-3xl text-center">{{ radio.Part }}</p>
        <p class="text-gray-600 text-center">{{ radio.Description }}</p>
      </div>
    </div>
  </main>
</template>
