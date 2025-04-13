<script setup lang="ts">
</script>

<template>
  <main class="flex justify-center items-center p-20">
    <div class="absolute top-8 right-6">
      <RouterLink :to="`/dash-camera-info-support`" class="bg-red-500 px-4 py-2 rounded-lg shadow-md hover:bg-red-700">
        Return
      </RouterLink>
    </div>

    <div class="grid grid-cols-3 gap-20">
      <RouterLink :to="'/dash-camera-info-support/nextbase-troubleshoot'"
        class="bg-halfords-orange-400 w-72 h-72 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-white border border-black flex items-center justify-center">
          <img src="/Images/DashCameraImages/522Bundle.jpg" alt="information" class="w-full h-full object-contain" />
        </div>
        <p class="mt-3 font-bold text-black text-3xl text-center">Nextbase Troubleshoot</p>
      </RouterLink>

      <RouterLink :to="'/dash-camera-info-support/iq-troubleshoot'"
        class="bg-halfords-orange-400 w-72 h-72 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-white border border-black flex items-center justify-center">
          <img src="/Images/DashCameraImages/iQ.jpg" alt="how-to" class="h-full w-full object-contain" />
        </div>
        <p class="mt-3 font-bold text-black text-3xl text-center">IQ Troubleshoot</p>
      </RouterLink>

      <RouterLink :to="'/dash-camera-info-support/piqo-troubleshoot'"
        class="bg-halfords-orange-400 w-72 h-72 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-white border border-black flex items-center justify-center">
          <img src="/Images/DashCameraImages/Piqo.jpg" alt="troubleshoot" class="h-full w-full object-contain" />
        </div>
        <p class="mt-3 font-bold text-black text-3xl text-center">Piqo Troubleshoot</p>
      </RouterLink>

      <RouterLink :to="'/dash-camera-info-support/roadangel-troubleshoot'"
        class="bg-halfords-orange-400 w-72 h-72 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-white border border-black flex items-center justify-center">
          <img src="/Images/DashCameraImages/HaloPro.jpg" alt="troubleshoot" class="h-full w-full object-contain" />
        </div>
        <p class="mt-3 font-bold text-black text-3xl text-center">Road Angel Troubleshoot</p>
      </RouterLink>

      <RouterLink :to="'/dash-camera-info-support/blackvue-troubleshoot'"
        class="bg-halfords-orange-400 w-72 h-72 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-white border border-black flex items-center justify-center">
          <img src="/Images/DashCameraImages/DR770X-2CH.jpg" alt="troubleshoot" class="h-full w-full object-contain" />
        </div>
        <p class="mt-3 font-bold text-black text-3xl text-center">BlackVue Troubleshoot</p>
      </RouterLink>
    </div>
  </main>
</template>
