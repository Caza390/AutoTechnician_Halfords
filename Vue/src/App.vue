<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView, } from 'vue-router';
import HomeView from './views/HomeView.vue';

const isDropdownOpen = ref(false);

const closeDropdown = () => {
  isDropdownOpen.value = false;
};
</script>

<template>

  <div class="bg-halfords-background-50 min-h-screen">
    <div class="bg-halfords-background-950">
      <p class="text-halfords-orange-400 text-3xl md:text-5xl font-bold p-5">Halfords Auto Technician</p>
    </div>

    <main>
      <RouterView />
    </main>
  </div>

</template>
