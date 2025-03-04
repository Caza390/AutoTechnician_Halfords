<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from 'vue-router';

const route = useRoute();

const make = route.params.make as string;
const model = route.params.model as string;
const year = route.params.year as string;

</script>

<template>
  <main class="flex justify-center items-center p-20">
    <div class="grid grid-cols-4 gap-8">
      <!-- Dash Camera Link -->
      <RouterLink :to="`/vehicle-select/${make}/${model}/${year}/dash-camera`"
        class="bg-halfords-orange-400 w-72 h-72 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-halfords-orange-300 border border-black flex items-center justify-center">
          <img src="/Images/DashCameraImages/522Bundle.jpg" alt="dash-camera"
            class="w-full h-full object-contain" />
        </div>
        <p class="mt-3 font-bold text-black text-3xl text-center">Dash Camera</p>
      </RouterLink>

      <!-- Radio Link -->
      <RouterLink :to="`/vehicle-select/${make}/${model}/${year}/audio`"
        class="bg-halfords-orange-400 w-72 h-72 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-halfords-orange-300 border border-black flex items-center justify-center">
          <img src="/Images/Models/Insignia.png" alt="audio" class="w-full h-full object-contain" />
        </div>
        <p class="mt-3 font-bold text-black text-3xl text-center">Radio</p>
      </RouterLink>

      <!-- Speakers Link -->
      <RouterLink :to="`/vehicle-select/${make}/${model}/${year}/speakers`"
        class="bg-halfords-orange-400 w-72 h-72 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-halfords-orange-300 border border-black flex items-center justify-center">
          <img src="/Images/Models/Insignia.png" alt="High-quality car speakers" class="w-full h-full object-contain" />
        </div>
        <p class="mt-3 font-bold text-black text-3xl text-center">Speaker</p>
      </RouterLink>
    </div>
  </main>
</template>
