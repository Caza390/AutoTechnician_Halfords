<script setup lang="ts">
</script>

<template>
  <main class="flex justify-center items-center p-20">
    <div class="grid grid-cols-3 gap-20">
      <RouterLink to="/dash-camera" class="bg-halfords-orange-400 w-72 h-72 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-halfords-orange-300 border border-black flex items-center justify-center">
          <img src="/Images/DashCamera.png" alt="dash_camera" class="w-full h-full object-cover" />
        </div>
        <p class="mt-4 font-bold text-black">Dash Camera</p>
      </RouterLink>

      <RouterLink to="/audio" class="bg-halfords-orange-400 w-72 h-72 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-halfords-orange-300 border border-black flex items-center justify-center">
          <img src="/Images/Audio.jpg" alt="audio" class="w-full h-full object-cover" />
        </div>
        <p class="mt-4 font-bold text-black">Audio</p>
      </RouterLink>

      <RouterLink to="/speakers" class="bg-halfords-orange-400 w-72 h-72 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-halfords-orange-300 border border-black flex items-center justify-center">
          <img src="/Images/Speakers.jpg" alt="speakers" class="w-full h-full object-cover" />
        </div>
        <p class="mt-4 font-bold text-black">Speakers</p>
      </RouterLink>
    </div>
  </main>
</template>
