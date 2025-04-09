<script setup lang="ts">
import { ref } from "vue";
import dashCamerasData from "./Data/DashCameraInformation";
import InformationModal from "./Modal/DashCameraInformationModal.vue";

const dashCameras = ref(dashCamerasData.map(camera => ({ ...camera, showSpecifications: false })));

const showModal = ref(false);
const selectedItem = ref<any>(null);

const openModal = (item: any) => {
  selectedItem.value = item;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
  <main class="flex justify-center items-center p-20">
    <div class="absolute top-8 right-6">
      <RouterLink to="/dash-camera-info-support"
        class="bg-red-500 px-4 py-2 rounded-lg shadow-md text-xl font-bold hover:bg-red-700">
        Return
      </RouterLink>
    </div>

    <div class="grid grid-cols-4 gap-8">
      <div v-for="(camera) in dashCameras" :key="camera.ArticleId"
        class="bg-halfords-orange-400 w-80 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500 shadow-lg">
        <!-- Image -->
        <div class="w-64 h-40 bg-white border border-black flex items-center justify-center">
          <img :src="camera.Image" :alt="camera.Type" class="w-full h-full object-contain" />
        </div>

        <!-- Details -->
        <p class="mt-4 font-bold text-black text-lg">{{ camera.Brand }}</p>
        <p class="font-bold text-black text-lg">{{ camera.Type }}</p>

        <!-- Open Modal -->
        <button @click="openModal(camera)" class="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">Show
          More Details
        </button>
      </div>
    </div>
  </main>


  <InformationModal v-if="showModal" :item="selectedItem" @close="closeModal" />
</template>
