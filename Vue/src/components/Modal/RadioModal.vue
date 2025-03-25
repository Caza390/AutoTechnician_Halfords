<script setup lang="ts">
defineProps<{ item: any }>();
</script>

<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-5 rounded-lg w-[100vh] shadow-lg relative">
        <button class="absolute top-2 right-2 pb-2 px-2 text-red-950 text-4xl font-bold rounded-lg bg-red-500 hover:bg-red-700 hover:text-black" @click="$emit('close')">&times;</button>
        <h2 class="text-6xl font-bold">{{ item.Part }}</h2>
        <img :src="item.PartImage" :alt="item.Part" class="w-full h-[50vh] object-contain mt-2" />
        <p v-if="item.Description?.[0]?.Long" class="mt-2 text-gray-900 text-xl">{{ item.Description?.[0]?.Long }}</p>
        <p v-else class="mt-2 text-gray-900 text-xl">{{ item.Description }}</p>
      </div>
    </div>
  </template>
  