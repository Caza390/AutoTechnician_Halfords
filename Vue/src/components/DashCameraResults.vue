<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { useRoute } from "vue-router";
import dashCameraData from "./Data/DashCameras/DashCameraResults";

const route = useRoute();
const make = ref(route.params.make);
const model = ref(route.params.model);
const year = ref(route.params.year);
const dropdownStates = ref<{ [key: string]: boolean }>({
  equipment: false,
  fuse: false,
  front: false,
  rear: false
});

watch(
  () => [route.params.make, route.params.model, route.params.year],
  ([newMake, newModel, newYear]) => {
    make.value = newMake;
    model.value = newModel;
    year.value = newYear;
  }
);

const formattedMake = computed(() =>
  typeof make.value === "string" ? make.value.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase()) : "Unknown Make"
);
const formattedModel = computed(() =>
  typeof model.value === "string" ? model.value.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase()) : "Unknown Model"
);
const formattedYear = computed(() =>
  typeof year.value === "string" ? year.value.replace(/\b\w/g, (char) => char.toUpperCase()) : "Unknown Year"
);

const toggleDropdown = (section: string) => {
  dropdownStates.value[section] = !dropdownStates.value[section];
};

const dashCamInfo = computed(() =>
  dashCameraData.find((camera) => {
    const makeStr = Array.isArray(make.value) ? make.value[0] : make.value;
    const modelStr = Array.isArray(model.value) ? model.value[0] : model.value;

    return (
      makeStr?.toLowerCase() === camera.Make.toLowerCase() &&
      modelStr?.toLowerCase() === camera.Model.toLowerCase() &&
      camera.Year === year.value
    );
  })
);
</script>

<template>
  <div class="absolute top-8 right-6">
    <RouterLink :to="`/vehicle-select/${make}/${model}/${year}`"
      class="bg-red-500 px-4 py-2 rounded-lg shadow-md text-xl font-bold hover:bg-red-700">
      Return
    </RouterLink>
  </div>

  <main class="flex flex-col items-center p-10">
    <h1 class="text-3xl font-bold mb-5">
      {{ formattedMake }} / {{ formattedModel }} / {{ formattedYear }} / Dash Camera
    </h1>


    <div v-if="dashCamInfo" class="w-full max-w-xl">
      <!-- Equipment -->
      <button @click="toggleDropdown('equipment')"
        class="border-2 border-halfords-orange-400 bg-halfords-background-950 text-halfords-orange-400 text-3xl font-bold my-2 py-2 px-4 rounded w-full">
        Equipment
      </button>
      <div v-if="dropdownStates.equipment"
        class="mb-4 bg-halfords-background-50 border border-halfords-Background-950 rounded-lg shadow-lg w-full p-3">
        <div v-for="(item, index) in dashCamInfo.Equiptment.split(', ')" :key="index" class="p-2">
          <p>{{ item }}</p>
        </div>
      </div>

      <!-- Fuse Guide -->
      <button @click="toggleDropdown('fuse')"
        class="border-2 border-halfords-orange-400 bg-halfords-background-950 text-halfords-orange-400 text-3xl font-bold my-2 py-2 px-4 rounded w-full">
        Fuse Guide
      </button>
      <div v-if="dropdownStates.fuse"
        class="mb-4 bg-halfords-background-50 border border-halfords-Background-950 rounded-lg shadow-lg w-full p-3">
        <div v-for="(fuse, index) in dashCamInfo.FuseText.split(', ')" :key="index" class="p-2">
          <p>{{ fuse }}</p>
        </div>
      </div>

      <!-- Front Camera -->
      <button @click="toggleDropdown('front')"
        class="border-2 border-halfords-orange-400 bg-halfords-background-950 text-halfords-orange-400 text-3xl font-bold my-2 py-2 px-4 rounded w-full">
        Front Location
      </button>
      <div v-if="dropdownStates.front"
        class="mb-4 bg-halfords-background-50 border border-halfords-Background-950 rounded-lg shadow-lg w-full p-3">
        <div v-for="(fcamera, index) in dashCamInfo.FrontLocation.split(', ')" :key="index" class="p-2">
          <p>{{ fcamera }}</p>
        </div>
      </div>

      <!-- Rear Camera -->
      <button @click="toggleDropdown('rear')"
        class="border-2 border-halfords-orange-400 bg-halfords-background-950 text-halfords-orange-400 text-3xl font-bold my-2 py-2 px-4 rounded w-full">
        Rear Location
      </button>
      <div v-if="dropdownStates.rear"
        class="mb-4 bg-halfords-background-50 border border-halfords-Background-950 rounded-lg shadow-lg w-full p-3">
        <div v-for="(rcamera, index) in dashCamInfo.RearLocation.split(', ')" :key="index" class="p-2">
          <p>{{ rcamera }}</p>
        </div>
      </div>
    </div>

    <div v-else>
      <p class="text-xl font-bold mb-5">No Dash Camera Data
        Provided For This Vehicle</p>
      <RouterLink :to="`/vehicle-select/${make}/${model}/${year}`"
        class="bg-red-500 px-4 py-2 rounded-lg shadow-md text-xl font-bold hover:bg-red-700">Return
      </RouterLink>
    </div>
  </main>
</template>
