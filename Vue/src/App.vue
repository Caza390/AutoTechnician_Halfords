<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView, } from 'vue-router';

const isDropdownOpen = ref(false);

const closeDropdown = () => {
  isDropdownOpen.value = false;
};
</script>

<template>

  <div class="bg-halfords-background-700 min-h-screen">
    <div class="bg-halfords-background-950">
      <RouterLink to="/" class="inline-block text-halfords-orange-400 text-3xl md:text-5xl font-bold p-5">
        Halfords Auto Technician
      </RouterLink>
    </div>

    <main>
      <RouterView />
    </main>
  </div>

</template>
