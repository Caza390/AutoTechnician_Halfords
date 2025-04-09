<script setup lang="ts">
const props = defineProps<{ item: any }>();
</script>

<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-5 rounded-lg w-[100vh] shadow-lg relative">
        <button class="absolute top-2 right-2 pb-2 px-2 text-red-950 text-4xl font-bold rounded-lg bg-red-500 hover:bg-red-700 hover:text-black" @click="$emit('close')">&times;</button>
        <h1 class="text-2xl font-bold"> {{ item.ArticleId }} - {{ item.Brand }} {{ item.Type }} </h1>
        <img :src="item.Image" :alt="item.Type" class="w-full h-64 object-contain mt-2 mb-2" />
        <h2 v-if="item.OnlineExclusive" class="text-2xl"> {{ item.OnlineExclusive }} </h2>
        <h2 v-if="item.App" class="text-2xl">App: {{ item.App }} </h2>
        <h2 v-if="item.Hardwire" class="text-2xl">Hardwire: {{ item.Hardwire }} </h2>
        <ul class="grid grid-cols-4 mt-4 border border-gray-300 bg-white text-black p-4 rounded-lg shadow-md w-full">
          <li v-for="spec in item.Specifications" :key="spec" class="text-md">{{ spec }}</li>
        </ul>
      </div>
    </div>
  </template>
  