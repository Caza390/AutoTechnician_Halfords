<script setup lang="ts">
import { ref } from "vue";
import dashCamerasData from "./Data/DashCameraInformation"; // Import data

// Create a reactive copy of the data
const dashCameras = ref(dashCamerasData.map(camera => ({ ...camera, showSpecifications: false })));

// Toggle function for specifications
const toggleSpecifications = (index: number) => {
  dashCameras.value[index].showSpecifications = !dashCameras.value[index].showSpecifications;
};
</script>

<template>
  <main class="flex justify-center items-center p-20">
    <div class="absolute top-8 right-6">
      <RouterLink to="/dash-camera-info-support" class="bg-red-500 px-4 py-2 rounded-lg shadow-md text-xl font-bold hover:bg-red-700">
        Return
      </RouterLink>
    </div>

    <div class="grid grid-cols-4 gap-8">
      <div v-for="(camera, index) in dashCameras" :key="camera.ArticelId"
        class="bg-halfords-orange-400 w-80 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500 shadow-lg">
        <!-- Image -->
        <div class="w-64 h-40 bg-white border border-black flex items-center justify-center">
          <img :src="camera.Image" :alt="camera.Type" class="w-full h-full object-contain" />
        </div>

        <!-- Details -->
        <p class="mt-4 font-bold text-black text-lg">{{ camera.Brand }}</p>
        <p class="font-bold text-black text-lg">{{ camera.Type }}</p>
        <p class="text-sm text-gray-700">{{ camera.Description }}</p>
        <p class="text-xs mt-2 font-semibold">App: {{ camera.App }}</p>

        <!-- Toggle Specifications -->
        <button @click="toggleSpecifications(index)"
          class="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
          {{ camera.showSpecifications ? "Hide" : "Show" }} Specifications
        </button>

        <!-- Specifications List -->
        <ul v-if="camera.showSpecifications" class="mt-4 bg-white text-black p-4 rounded-lg shadow-md w-full">
          <li v-for="spec in camera.Specifications" :key="spec" class="text-sm">{{ spec }}</li>
        </ul>
      </div>
    </div>
  </main>
</template>
