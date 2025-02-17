<script setup lang="ts">
import { ref, watch, } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const make = ref(route.params.make);
const model = ref(route.params.model);
const year = ref(route.params.year);

watch(
  () => [route.params.make, route.params.model, route.params.year],
  ([newMake, newModel, newYear]) => {
    make.value = newMake;
    model.value = newModel;
    year.value = newYear;
  }
);
</script>

<template>
  <main class="flex flex-col items-center p-10">
    <h1 class="text-3xl font-bold mb-5">
      Speakers
      /
      {{typeof make === "string"
        ? make.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase())
        : "Unknown Make"
      }}
      /
      {{typeof model === "string"
        ? model.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase())
        : "Unknown Model"
      }}
      /
      {{typeof year === "string"
        ? year.replace(/\b\w/g, (char) => char.toUpperCase())
        : "Unknown Year"
      }}
    </h1>
  </main>
</template>
