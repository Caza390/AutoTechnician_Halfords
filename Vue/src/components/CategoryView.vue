<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from 'vue-router';

const route = useRoute();

const make = route.params.make as string;
const model = route.params.model as string;
const year = route.params.year as string;

</script>

<template>
  <div class="absolute top-8 right-6">
    <RouterLink :to="`/vehicle-select/${make}/`" class="bg-red-500 px-4 py-2 rounded-lg shadow-md hover:bg-red-700">
      Return
    </RouterLink>
  </div>

  <main class="flex flex-col items-center p-10">
    <h1 class="text-3xl font-bold mb-5">
      {{
        typeof make === "string"
          ? make.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase())
          : "Unknown Make"
      }} /
      {{
        typeof model === "string"
          ? model.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase())
          : "Unknown Make"
      }} /
      {{
        typeof year === "string"
          ? year.replace("-", "-").replace(/\b\w/g, (char) => char.toUpperCase())
          : "Unknown Make"
      }}
    </h1>

    <div class="grid grid-cols-4 gap-8">
      <!-- Dash Camera Link -->
      <RouterLink :to="`/vehicle-select/${make}/${model}/${year}/dash-camera`"
        class="bg-halfords-orange-400 w-72 h-72 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-white border border-black flex items-center justify-center">
          <img src="/Images/DashCameraImages/DashCameraMain.png" alt="dash-camera"
            class="w-full h-full object-contain" />
        </div>
        <p class="mt-3 font-bold text-black text-3xl text-center">Dash Camera</p>
      </RouterLink>

      <!-- Radio Link -->
      <RouterLink :to="`/vehicle-select/${make}/${model}/${year}/audio`"
        class="bg-halfords-orange-400 w-72 h-72 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-white border border-black flex items-center justify-center">
          <img src="/Images/RadioImages/RadioMain.png" alt="audio" class="w-full h-full object-contain" />
        </div>
        <p class="mt-3 font-bold text-black text-3xl text-center">Radio</p>
      </RouterLink>

      <!-- Speakers Link -->
      <RouterLink :to="`/vehicle-select/${make}/${model}/${year}/speakers`"
        class="bg-halfords-orange-400 w-72 h-72 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-white border border-black flex items-center justify-center">
          <img src="/Images/SpeakersImages/SpeakerMain.png" alt="Speakers" class="w-full h-full object-contain" />
        </div>
        <p class="mt-3 font-bold text-black text-3xl text-center">Speaker</p>
      </RouterLink>
    </div>
  </main>
</template>
