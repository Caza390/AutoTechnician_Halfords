<script setup lang="ts">
</script>

<template>
  <main class="flex justify-center items-center p-20">
    <div class="absolute top-8 right-6">
    <RouterLink :to="`/`" class="bg-red-500 px-4 py-2 rounded-lg shadow-md hover:bg-red-700">
      Return
    </RouterLink>
  </div>

    <div class="grid grid-cols-3 gap-20">
      <RouterLink :to="'/dash-camera-info-support/cameras-information'" class="bg-halfords-orange-400 w-72 h-72 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-halfords-orange-300 border border-black flex items-center justify-center">
          <img src="/Images/Models/Insignia.png" alt="Vehicle selection interface" class="w-full h-full object-cover" />
        </div>
        <p class="mt-4 font-bold text-black">Cameras Information</p>
      </RouterLink>

      <RouterLink :to="'/dash-camera-info-support/how-to'" class="bg-halfords-orange-400 w-72 h-72 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-halfords-orange-300 border border-black flex items-center justify-center">
          <img src="/Images/Models/Insignia.png" alt="Car audio system" class="w-full h-full object-cover" />
        </div>
        <p class="mt-4 font-bold text-black">How To</p>
      </RouterLink>

      <RouterLink :to="'/dash-camera-info-support/troubleshooting'" class="bg-halfords-orange-400 w-72 h-72 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-halfords-orange-300 border border-black flex items-center justify-center">
          <img src="/Images/Models/Insignia.png" alt="High-quality car speakers" class="w-full h-full object-cover" />
        </div>
        <p class="mt-4 font-bold text-black">Trouble shooting</p>
      </RouterLink>
    </div>
  </main>
</template>
