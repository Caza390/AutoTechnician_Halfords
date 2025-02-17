<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { useRoute } from "vue-router";
import dashCameraData from "./Data/Resutls/DashCameraResults";

const route = useRoute();
const make = ref(route.params.make);
const model = ref(route.params.model);
const year = ref(route.params.year);
const isDropdownOpen = ref(false);

watch(
  () => [route.params.make, route.params.model, route.params.year],
  ([newMake, newModel, newYear]) => {
    make.value = newMake;
    model.value = newModel;
    year.value = newYear;
  }
);

// Format the car details for display
const formattedMake = computed(() =>
  typeof make.value === "string"
    ? make.value.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase())
    : "Unknown Make"
);

const formattedModel = computed(() =>
  typeof model.value === "string"
    ? model.value.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase())
    : "Unknown Model"
);

const formattedYear = computed(() =>
  typeof year.value === "string"
    ? year.value.replace(/\b\w/g, (char) => char.toUpperCase())
    : "Unknown Year"
);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Find the corresponding dashcam data for the selected make, model, and year
const dashCamInfo = computed(() =>
  dashCameraData.find((camera) => {
    const makeStr = Array.isArray(make.value) ? make.value[0] : make.value;
    const modelStr = Array.isArray(model.value) ? model.value[0] : model.value;
    const yearStr = Array.isArray(year.value) ? year.value[0] : year.value;

    return (
      makeStr?.toLowerCase() === camera.Make.toLowerCase() &&
      modelStr?.toLowerCase() === camera.Model.toLowerCase() &&
      yearStr === camera.Year
    );
  })
);

</script>

<template>
  <main class="flex flex-col items-center p-10">
    <h1 class="text-3xl font-bold mb-5">
      Dash Camera / {{ formattedMake }} / {{ formattedModel }} / {{ formattedYear }}
    </h1>

    <!-- Equipment List -->
    <div v-if="dashCamInfo" class="w-full max-w-xl">
      <button @click="toggleDropdown"
        class="bg-halfords-orange-400 text-black font-bold py-2 px-4 rounded flex items-center justify-between w-full">
        Required Equipment
        <span class="transition-transform duration-300" :class="{ 'rotate-180': isDropdownOpen }">⬇️</span>
      </button>

      <div v-if="isDropdownOpen"
        class="absolute left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-full p-3">
        <div v-for="(item, index) in dashCamInfo.Equiptment.split(', ')" :key="index"
          class="flex items-center space-x-3 p-2 hover:bg-gray-100 cursor-pointer">
          <img :src="`/Images/${dashCamInfo.EquiptmentImg.split(', ')[index]}`" :alt="item"
            class="w-10 h-10 object-contain">
          <p class="text-black">{{ item }}</p>
        </div>
      </div>
    </div>

    <!-- Fuse Guide -->
    <div v-if="dashCamInfo" class="w-full max-w-xl">
      <button @click="toggleDropdown"
        class="bg-halfords-orange-400 text-black font-bold py-2 px-4 rounded flex items-center justify-between w-full">
        Fuse Guide
        <span class="transition-transform duration-300" :class="{ 'rotate-180': isDropdownOpen }">⬇️</span>
      </button>

      <div v-if="isDropdownOpen"
        class="absolute left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-full p-3">
        <div v-for="(fuse, index) in dashCamInfo.FuseText.split(', ')" :key="index"
          class="flex items-center space-x-3 p-2 hover:bg-gray-100 cursor-pointer">
          <img :src="`/Images/${dashCamInfo.FuseImg.split(', ')[index]}`" :alt="fuse" class="w-10 h-10 object-contain">
          <p class="text-black">{{ fuse }}</p>
        </div>
      </div>
    </div>

    <!-- Front Camera Location -->
    <div v-if="dashCamInfo" class="w-full max-w-xl">
      <button @click="toggleDropdown"
        class="bg-halfords-orange-400 text-black font-bold py-2 px-4 rounded flex items-center justify-between w-full">
        Front Location
        <span class="transition-transform duration-300" :class="{ 'rotate-180': isDropdownOpen }">⬇️</span>
      </button>

      <div v-if="isDropdownOpen"
        class="absolute left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-full p-3">
        <div v-for="(fcamera, index) in dashCamInfo.FrontLocation.split(', ')" :key="index"
          class="flex items-center space-x-3 p-2 hover:bg-gray-100 cursor-pointer">
          <img :src="`/Images/${dashCamInfo.FrontLocation.split(', ')[index]}`" :alt="fcamera"
            class="w-10 h-10 object-contain">
          <p class="text-black">{{ fcamera }}</p>
        </div>
      </div>
    </div>

    <!-- Rear Camera Location -->
    <div v-if="dashCamInfo" class="w-full max-w-xl">
      <button @click="toggleDropdown"
        class="bg-halfords-orange-400 text-black font-bold py-2 px-4 rounded flex items-center justify-between w-full">
        Rear Location
        <span class="transition-transform duration-300" :class="{ 'rotate-180': isDropdownOpen }">⬇️</span>
      </button>
      
      <div v-if="isDropdownOpen"
        class="absolute left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-full p-3">
        <div v-for="(rcamera, index) in dashCamInfo.RearLocation.split(', ')" :key="index"
          class="flex items-center space-x-3 p-2 hover:bg-gray-100 cursor-pointer">
          <img :src="`/Images/${dashCamInfo.RearLocation.split(', ')[index]}`" :alt="rcamera"
            class="w-10 h-10 object-contain">
          <p class="text-black">{{ rcamera }}</p>
        </div>
      </div>
    </div>

    <p v-else class="text-red-500 text-lg font-semibold">No dash camera data found for this vehicle.</p>
  </main>
</template>
