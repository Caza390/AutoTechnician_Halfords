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

  <div class="bg-halfords-background-900 min-h-screen">
    <div>
      <p class="bg-red-700">App.vue</p>
    </div>

    <main class="">
      <RouterView />
    </main>
  </div>

</template>
