<script setup lang="ts">
import { ref } from "vue";
import radioData from "./Data/RadioInformation";
import InformationModal from "./Modal/RadioInformationModal.vue";

const radios = ref(radioData.map(radio => ({ ...radio, showSpecifications: false })));

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
      <RouterLink to="/radio-info-support"
        class="bg-red-500 px-4 py-2 rounded-lg shadow-md text-xl font-bold hover:bg-red-700">
        Return
      </RouterLink>
    </div>

    <div class="grid grid-cols-4 gap-8">
      <div v-for="(radio) in radios" :key="radio.ArticleId"
        class="bg-halfords-orange-400 w-80 p-6 rounded-lg hover:bg-halfords-orange-500 shadow-lg flex flex-col h-96">

        <div class="w-64 h-40 bg-white border border-black flex items-center justify-center mx-auto">
          <img :src="radio.Image" :alt="radio.Type" class="w-full h-full object-contain" />
        </div>

        <div class="flex flex-col flex-grow justify-between mt-4">
          <div>
            <p class="font-bold text-black text-lg text-center">{{ radio.Brand }}</p>
            <p class="font-bold text-black text-lg text-center">{{ radio.Type }}</p>
            <p v-if="radio.OnlineExclusive" class="font-bold text-black text-lg text-center">{{ radio.OnlineExclusive
              }}
            </p>
          </div>

          <button @click="openModal(radio)" class="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 mt-4">
            Show More Details
          </button>
        </div>
      </div>
    </div>
  </main>


  <InformationModal v-if="showModal" :item="selectedItem" @close="closeModal" />
</template>
