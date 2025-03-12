<script setup lang="ts">
</script>

<template>
  <main class="flex justify-center items-center p-20">
    <div class="grid grid-cols-4 gap-8">
      <RouterLink :to="'/vehicle-select'"
        class="bg-halfords-orange-400 w-72 h-72 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-white border border-black flex items-center justify-center">
          <img src="/Images/Brand/All-Brands.png" alt="vehicle-select"
            class="w-full h-full object-contain" />
        </div>
        <p class="mt-3 font-bold text-black text-3xl text-center">Vehicle Select</p>
      </RouterLink>

      <RouterLink :to="'/dash-camera-info-support'"
        class="bg-halfords-orange-400 w-72 h-72 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-white border border-black flex items-center justify-center">
          <img src="/Images/DashCameraImages/DashCameraMain.png" alt="dash-camera-info-support" class="w-full h-full object-contain" />
        </div>
        <p class="mt-3 font-bold text-black text-3xl text-center">Dash Camera Info/Support</p>
      </RouterLink>

      <RouterLink :to="'/radio-info-support'"
        class="bg-halfords-orange-400 w-72 h-72 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-white border border-black flex items-center justify-center">
          <img src="/Images/RadioImages/RadioMain.png" alt="radio-info-support" class="w-full h-full object-contain" />
        </div>
        <p class="mt-3 font-bold text-black text-3xl text-center">Radio Info/Support</p>
      </RouterLink>

      <RouterLink :to="'/speakers-info-support'"
        class="bg-halfords-orange-400 w-72 h-72 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-white border border-black flex items-center justify-center">
          <img src="/Images/SpeakersImages/SpeakerMain.png" alt="speakers-info-support" class="w-full h-full object-contain" />
        </div>
        <p class="mt-3 font-bold text-black text-3xl text-center">Speakers Info/Support</p>
      </RouterLink>
    </div>
  </main>
</template>
