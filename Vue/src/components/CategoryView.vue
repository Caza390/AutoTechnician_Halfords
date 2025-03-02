<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const category = ref(route.params.category);
const makes = ref<any[]>([]);
const troubleshooting = ref<any[]>([]);

const loadMakes = async () => {

};

onMounted(loadMakes);
watch(() => route.params.category, loadMakes);
</script>

<template>
  <div class="absolute top-8 right-6">
    <RouterLink to="/" class="bg-red-500 px-4 py-2 rounded-lg shadow-md hover:bg-red-700">Return</RouterLink>
  </div>

  <main class="flex flex-col items-center p-10">
    <h1 class="text-3xl font-bold mb-5">
      {{typeof category === "string"
        ? category.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase())
        : "Unknown Category"
      }}
    </h1>

    <!-- `Category Makes -->
    <div v-if="makes.length > 0" class="grid grid-cols-4 gap-8">
      <RouterLink v-for="make in makes" :key="make.id" :to="`/${category}/${make.Make.toLowerCase()}`"
        class="bg-halfords-orange-400 w-64 h-64 p-4 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <img :src="make.Logo" :alt="make.Make" class="w-28 h-28 py-4 object-contain" />
        <p class="mt-3 font-bold text-black text-3xl">{{ make.Make }}</p>
      </RouterLink>
    </div>

    <div v-else>
      <p class="text-red-500 text-lg mb-4">No Data Provided</p>
      <RouterLink to="/" class="border-4 p-1">Return</RouterLink>
    </div>

    <!-- Troubleshooting Section -->
    <div v-if="troubleshooting.length > 0" class="mt-10 w-full max-w-3xl">
      <h2 class="text-2xl font-semibold mb-3 text-center">Troubleshooting</h2>
      <ul class="border border-gray-300 rounded-lg bg-white p-5">
        <li v-for="issue in troubleshooting" :key="issue.id" class="mb-3">
          <strong class="text-halfords-orange-500">{{ issue.issue }}:</strong>

          <ul v-if="Array.isArray(issue.solution)" class="ml-4 list-disc">
            <li v-for="(line, index) in issue.solution" :key="index">{{ line }}</li>
          </ul>

          <p v-else class="whitespace-normal">{{ issue.solution }}</p>
        </li>
      </ul>
    </div>
  </main>
</template>
