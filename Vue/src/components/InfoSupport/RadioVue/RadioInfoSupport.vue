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
      <RouterLink :to="'/radio-info-support/radio-information'"
        class="bg-halfords-orange-400 w-72 h-72 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-white border border-black flex items-center justify-center">
          <img src="/Images/RadioImages/RadioMain.jpg" alt="information" class="w-full h-full object-cover" />
        </div>
        <p class="mt-3 font-bold text-black text-3xl text-center">Radio Information</p>
      </RouterLink>

      <RouterLink :to="'/radio-info-support/how-to'"
        class="bg-halfords-orange-400 w-72 h-72 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-white border border-black flex items-center justify-center">
          <img src="/Images/RadioImages/RadioHowTo.jpg" alt="how-to" class="w-full h-full object-cover" />
        </div>
        <p class="mt-3 font-bold text-black text-3xl text-center">How To</p>
      </RouterLink>

      <RouterLink :to="'/radio-info-support/troubleshooting'"
        class="bg-halfords-orange-400 w-72 h-72 p-6 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-white border border-black flex items-center justify-center">
          <img src="/Images/RadioImages/RadioTroubleshooting.jpg" alt="troubleshoot" class="w-full h-full object-cover" />
        </div>
        <p class="mt-3 font-bold text-black text-3xl text-center">Troubleshooting</p>
      </RouterLink>
    </div>
  </main>
</template>
