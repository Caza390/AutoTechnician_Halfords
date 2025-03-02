<script setup lang="ts">
</script>

<template>
  <main class="flex justify-center items-center p-20">
    <div class="grid grid-cols-4 gap-8">
      <RouterLink :to="'/vehicle-select'" class="bg-halfords-orange-400 w-72 h-72 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-halfords-orange-300 border border-black flex items-center justify-center">
          <img src="/Images/Models/Insignia.png" alt="Vehicle selection interface" class="w-full h-full object-cover" />
        </div>
        <p class="mt-4 font-bold text-black">Vehicle Select</p>
      </RouterLink>

      <RouterLink :to="'/dash-camera-info-support'" class="bg-halfords-orange-400 w-72 h-72 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-halfords-orange-300 border border-black flex items-center justify-center">
          <img src="/Images/Models/Insignia.png" alt="Car audio system" class="w-full h-full object-cover" />
        </div>
        <p class="mt-4 font-bold text-black">Dash Camera Info/Support</p>
      </RouterLink>

      <RouterLink :to="'/radio-info-support'" class="bg-halfords-orange-400 w-72 h-72 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-halfords-orange-300 border border-black flex items-center justify-center">
          <img src="/Images/Models/Insignia.png" alt="High-quality car speakers" class="w-full h-full object-cover" />
        </div>
        <p class="mt-4 font-bold text-black">Radio Info/Support</p>
      </RouterLink>

      <RouterLink :to="'/speakers-info-support'" class="bg-halfords-orange-400 w-72 h-72 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-halfords-orange-300 border border-black flex items-center justify-center">
          <img src="/Images/Models/Insignia.png" alt="High-quality car speakers" class="w-full h-full object-cover" />
        </div>
        <p class="mt-4 font-bold text-black">Speakers Info/Support</p>
      </RouterLink>
    </div>
  </main>
</template>
