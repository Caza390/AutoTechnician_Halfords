<script setup lang="ts">
import { ref, watch, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import RadioModal from "../components/Modal/RadioModal.vue";

const route = useRoute();
const make = ref(route.params.make);
const model = ref(route.params.model);
const year = ref(route.params.year);
const type = ref(route.params.type);

const guideLinks = ref<any[]>([]);
const fullKits = ref<any[]>([]);
const fascias = ref<any[]>([]);
const harnesses = ref<any[]>([]);
const aerials = ref<any[]>([]);
const extraCables = ref<any[]>([]);
const parkingAid = ref<any[]>([]);
const availableTypes = ref<any[]>([]);
const showTypes = ref(false);

type RadioItem = {
  id: string;
  Car: { Make: string; Model: string; Year: string }[];
  PartImage: string;
  Category: string;
  Part: string;
  Description: Array<{ Short: string; Long: string }>;
  KitType: string;
  DinType: string;
  HarnessType: string;
  List: Array<{ Part: string; Type: string }>;
};

const loadRadioData = async () => {
  try {
    const makeValue = String(make.value).trim();
    const modelValue = String(model.value).trim();
    const yearValue = String(year.value).trim();
    const typeValue = type.value ? decodeURIComponent(String(type.value)).trim() : "";

    console.log("Selected Make:", makeValue);
    console.log("Selected Model:", modelValue);
    console.log("Selected Year:", yearValue);
    console.log("Selected Type:", typeValue);

    // Load Radio Types
    const allTypes = (await import("./Data/Radio/RadioType")).default;
    const matchedTypes = allTypes.filter(
      (t) =>
        t.Make.trim().toLowerCase() === makeValue.toLowerCase() &&
        t.Model.trim().toLowerCase() === modelValue.toLowerCase() &&
        String(t.Year).trim() === yearValue
    );

    showTypes.value = matchedTypes.length > 0;
    availableTypes.value = matchedTypes;

    // Guide Links    
    const allGuideLinks = (await import("./Data/Radio/RadioGuideLists")).default;
    console.log("All Guides:", allGuideLinks);

    let matchedGuideLink = allGuideLinks.filter((r) =>
      r.Car.some(
        (c) =>
          c.Make.trim().toLowerCase() === makeValue.toLowerCase() &&
          c.Model.trim().toLowerCase() === modelValue.toLowerCase() &&
          String(c.Year).trim() === yearValue
      )
    );

    guideLinks.value = matchedGuideLink;
    console.log("Final Guide Link:", guideLinks.value);

    // Load Radio Kits
    const allRadios = (await import("./Data/Radio/RadioKits")).default;
    console.log("All Radios:", allRadios);

    let matchedRadios = allRadios.filter((r) =>
      r.Car.some(
        (c) =>
          c.Make.trim().toLowerCase() === makeValue.toLowerCase() &&
          c.Model.trim().toLowerCase() === modelValue.toLowerCase() &&
          String(c.Year).trim() === yearValue
      )
    );

    console.log("Matched Radios BEFORE Type Filter:", matchedRadios);

    // Filter by Type if selected
    if (typeValue) {
      matchedRadios = matchedRadios.filter((r) => {
        const kitType = r.KitType ? r.KitType.toLowerCase().replace(/\s+/g, "-").trim() : "";
        console.log(`Comparing "${kitType}" with "${typeValue}"`);
        return kitType === typeValue;
      });

      console.log("Filtered Radios:", matchedRadios);
    }

    // Filter Full Kits, Fascias, Harnesses etc
    fullKits.value = matchedRadios.filter((r) => r.Category.toLowerCase() === "kit");
    fascias.value = matchedRadios.filter((r) => r.Category.toLowerCase() === "fascia");
    harnesses.value = matchedRadios.filter((r) => r.Category.toLowerCase() === "harnes");
    aerials.value = matchedRadios.filter((r) => r.Category.toLowerCase() === "aerial");

    // Fascias
    const allFascias = (await import("./Data/Radio/RadioFascias")).default;
    console.log("All Fascias:", allFascias);

    let matchedFascias = allFascias.filter((r) =>
      r.Car.some(
        (c) =>
          c.Make.trim().toLowerCase() === makeValue.toLowerCase() &&
          c.Model.trim().toLowerCase() === modelValue.toLowerCase() &&
          String(c.Year).trim() === yearValue
      )
    );

    fascias.value = matchedFascias;
    console.log("Final Fascias:", fascias.value);

    // Harness
    const allHarnesses = (await import("./Data/Radio/RadioHarness")).default;
    console.log("All Harness:", allHarnesses);

    let matchedHarness = allHarnesses.filter((r) =>
      r.Car.some(
        (c) =>
          c.Make.trim().toLowerCase() === makeValue.toLowerCase() &&
          c.Model.trim().toLowerCase() === modelValue.toLowerCase() &&
          String(c.Year).trim() === yearValue
      )
    );

    harnesses.value = matchedHarness;
    console.log("Final Harness:", harnesses.value);

    // Aerials
    const allAerials = (await import("./Data/Radio/RadioAerial")).default;
    console.log("All Aerial:", allAerials);

    let matchedAerial = allAerials.filter((r) =>
      r.Car.some(
        (c) =>
          c.Make.trim().toLowerCase() === makeValue.toLowerCase() &&
          c.Model.trim().toLowerCase() === modelValue.toLowerCase() &&
          String(c.Year).trim() === yearValue
      )
    );

    aerials.value = matchedAerial;
    console.log("Final Aerials:", aerials.value);

    // Extra Cables
    const allExtraCables = (await import("./Data/Radio/RadioExtraCables")).default;
    console.log("All ExtraCables:", allExtraCables);

    let matchedExtraCable = allExtraCables.filter((r) =>
      r.Car.some(
        (c) =>
          c.Make.trim().toLowerCase() === makeValue.toLowerCase() &&
          c.Model.trim().toLowerCase() === modelValue.toLowerCase() &&
          String(c.Year).trim() === yearValue
      )
    );

    extraCables.value = matchedExtraCable;
    console.log("Final ExtraCables:", extraCables.value);

    // Parking Aid
    const allParkingAids = (await import("./Data/Radio/RadioParkingAid")).default;
    console.log("All Parking Aid:", allParkingAids);

    let matchedParkingAid = allParkingAids.filter((r) =>
      r.Car.some(
        (c) =>
          c.Make.trim().toLowerCase() === makeValue.toLowerCase() &&
          c.Model.trim().toLowerCase() === modelValue.toLowerCase() &&
          String(c.Year).trim() === yearValue
      )
    );

    parkingAid.value = matchedParkingAid;
    console.log("Final Parking Aid:", parkingAid.value);

  } catch (error) {
    console.error("Error loading Radio data:", error);
    fullKits.value = [];
    fascias.value = [];
    harnesses.value = [];
    availableTypes.value = [];
    showTypes.value = false;
  }
};

const isRadioDataEmpty = computed(() => {
  return (
    fullKits.value.length === 0 &&
    fascias.value.length === 0 &&
    harnesses.value.length === 0 &&
    aerials.value.length === 0 &&
    extraCables.value.length === 0 &&
    parkingAid.value.length === 0
  );
});

const showModal = ref(false);
const selectedItem = ref<any>(null);

const openModal = (item: any) => {
  selectedItem.value = item;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

onMounted(loadRadioData);

watch(() => route.params, () => {
  make.value = route.params.make;
  model.value = route.params.model;
  year.value = route.params.year;
  type.value = route.params.type;
  loadRadioData();
});
</script>

<template v-if="!isRadioDataEmpty">
  <div class="absolute top-8 right-6">
    <RouterLink :to="`/vehicle-select/${make}/${model}/${year}`"
      class="bg-red-500 px-4 py-2 rounded-lg shadow-md text-xl font-bold hover:bg-red-700">
      Return
    </RouterLink>
  </div>

  <main class="flex flex-col items-center p-10">
    <h1 class="text-3xl font-bold mb-5">
      {{ String(make).replace("-", " ").toUpperCase() }} /
      {{ String(model).replace("-", " ").toUpperCase() }} / {{ year }} / Radio
    </h1>

    <!-- Show Kit Type Selection -->
    <div v-if="showTypes && !type" class="grid grid-cols-4 gap-8">
      <RouterLink v-for="kit in availableTypes" :key="kit.id"
        :to="`/vehicle-select/${make}/${model}/${year}/audio/${kit.KitType.toLowerCase().replace(/\s+/g, '-')}`"
        class="bg-halfords-orange-400 w-64 h-64 p-4 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
        <div class="w-56 h-36 bg-white border border-black flex items-center justify-center">
          <img :src="kit.KitImage" :alt="kit.KitType" class="w-full h-full object-contain" />
        </div>
        <p class="mt-3 font-bold text-black text-3xl text-center">{{ kit.KitType }}</p>
        <p class="text-gray-600 text-center">{{ kit.Description }}</p>
      </RouterLink>
    </div>

    <!-- Guide Links -->
    <div v-if="!(showTypes && !type) && guideLinks.length" class="flex flex-col items-center">
      <h2
        class="text-2xl font-bold text-center mb-4 w-full h-10 border-2 rounded text-halfords-orange-400 bg-halfords-background-950 border-halfords-orange-500">
        Guide Links
      </h2>
      <div class="grid grid-cols-4 gap-4">
        <div v-for="guide in guideLinks" :key="guide.id"
          class="bg-halfords-orange-400 w-72 h-92 p-4 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
          <p class="mt-3 font-bold text-black text-3xl text-center">{{ guide.GuideType }}</p>
          <a :href="guide.Link.startsWith('http') ? guide.Link : 'https://' + guide.Link" target="_blank" rel="noopener noreferrer"
            class="text-blue-500 hover:underline text-center block">
            link
          </a>
        </div>
      </div>
    </div>

    <!-- Full Kit Section -->
    <div v-if="!(showTypes && !type) && fullKits.length" class="flex flex-col items-center justify-center mt-10">
      <h2
        class="text-2xl font-bold text-center mb-4 w-full h-10 border-2 rounded text-halfords-orange-400 bg-halfords-background-950 border-halfords-orange-500">
        Full Kit
      </h2>
      <div class="grid grid-cols-4 gap-4">
        <div v-for="kit in fullKits" :key="kit.id"
          class="bg-halfords-orange-400 w-72 h-92 p-4 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
          <div class="w-56 h-36 bg-white border border-black flex items-center justify-center" @click="openModal(kit)">
            <img :src="kit.PartImage" :alt="kit.Part" class="w-full h-full object-contain" />
          </div>
          <p class="mt-3 font-bold text-black text-3xl text-center">{{ kit.Part }}</p>
          <p class="text-gray-600 text-center">{{ kit.DinType }}</p>
          <p v-if="kit.Description.length > 0" class="text-gray-600 text-center">{{ kit.Description[0].Short }}</p>
          <button @click="openModal(kit)" class="font-bold">More info</button>
        </div>
      </div>
    </div>

    <!-- Fascia Section -->
    <div v-if="!(showTypes && !type) && fascias.length" class="flex flex-col items-center justify-center mt-10">
      <h2
        class="text-2xl font-bold text-center mb-4 w-full h-10 border-2 rounded text-halfords-orange-400 bg-halfords-background-950 border-halfords-orange-500">
        Fascia
      </h2>
      <div class="grid grid-cols-4 gap-4 justify-center">
        <div v-for="fascia in fascias" :key="fascia.id"
          class="bg-halfords-orange-400 w-72 h-92 p-4 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
          <div class="w-56 h-36 bg-white border border-black flex items-center justify-center"
            @click="openModal(fascia)">
            <img :src="fascia.PartImage" :alt="fascia.Part" class="w-full h-full object-contain" />
          </div>
          <p class="mt-3 font-bold text-black text-3xl text-center">{{ fascia.Part }}</p>
          <p class="text-gray-600 text-center">{{ fascia.Description }}</p>
          <button @click="openModal(fascia)" class="font-bold">View Details</button>
        </div>
      </div>
    </div>

    <!-- Harness Section -->
    <div v-if="!(showTypes && !type) && harnesses.length" class="flex flex-col items-center justify-center mt-10">
      <h2
        class="text-2xl font-bold text-center mb-4 w-full h-10 border-2 rounded text-halfords-orange-400 bg-halfords-background-950 border-halfords-orange-500">
        Harness
      </h2>
      <div class="grid grid-cols-4 gap-4 justify-center">
        <div v-for="harness in harnesses" :key="harness.id"
          class="bg-halfords-orange-400 w-72 h-92 p-4 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
          <div class="w-56 h-36 bg-white border border-black flex items-center justify-center"
            @click="openModal(harness)">
            <img :src="harness.PartImage" :alt="harness.Part" class="w-full h-full object-contain" />
          </div>
          <p class="mt-3 font-bold text-black text-3xl text-center">{{ harness.Part }}</p>
          <p class="mt-3 font-bold text-black text-xl text-center">Harness Type: {{ harness.HarnessType }}</p>
          <p class="text-gray-600 text-center">{{ harness.Description }}</p>
          <button @click="openModal(harness)" class="font-bold">View Details</button>
        </div>
      </div>
    </div>

    <!-- Aerial Section -->
    <div v-if="!(showTypes && !type) && aerials.length" class="flex flex-col items-center justify-center mt-10">
      <h2
        class="text-2xl font-bold text-center mb-4 w-full h-10 border-2 rounded text-halfords-orange-400 bg-halfords-background-950 border-halfords-orange-500">
        Aerial
      </h2>
      <div class="grid grid-cols-4 gap-4 justify-center">
        <div v-for="aerial in aerials" :key="aerial.id"
          class="bg-halfords-orange-400 w-72 h-92 p-4 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
          <div class="w-56 h-36 bg-white border border-black flex items-center justify-center"
            @click="openModal(aerial)">
            <img :src="aerial.PartImage" :alt="aerial.Part" class="w-full h-full object-contain" />
          </div>
          <p class="mt-3 font-bold text-black text-3xl text-center">{{ aerial.Part }}</p>
          <p class="text-gray-600 text-center">{{ aerial.Description }}</p>
          <button @click="openModal(aerials)" class="font-bold">View Details</button>
        </div>
      </div>
    </div>

    <!-- Parking Harnes Section -->
    <div v-if="!(showTypes && !type) && parkingAid.length" class="flex flex-col items-center justify-center mt-10">
      <h2
        class="text-2xl font-bold text-center mb-4 w-full h-10 border-2 rounded text-halfords-orange-400 bg-halfords-background-950 border-halfords-orange-500">
        Parking Aid
      </h2>
      <div class="grid grid-cols-4 gap-4 justify-center">
        <div v-for="parkingAid in parkingAid" :key="parkingAid.id"
          class="bg-halfords-orange-400 w-72 h-92 p-4 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
          <div class="w-56 h-36 bg-white border border-black flex items-center justify-center"
            @click="openModal(parkingAid)">
            <img :src="parkingAid.PartImage" :alt="parkingAid.Part" class="w-full h-full object-contain" />
          </div>
          <p class="mt-3 font-bold text-black text-3xl text-center">{{ parkingAid.Part }}</p>
          <p class="text-gray-600 text-center">{{ parkingAid.Description }}</p>
          <button @click="openModal(parkingAid)" class="font-bold">View Details</button>
        </div>
      </div>
    </div>

    <!-- Extra Cable Section -->
    <div v-if="!(showTypes && !type) && extraCables.length" class="flex flex-col items-center justify-center mt-10">
      <h2
        class="text-2xl font-bold text-center mb-4 w-full h-10 border-2 rounded text-halfords-orange-400 bg-halfords-background-950 border-halfords-orange-500">
        Extra Cables
      </h2>
      <div class="grid grid-cols-4 gap-4 justify-center">
        <div v-for="extraCables in extraCables" :key="extraCables.id"
          class="bg-halfords-orange-400 w-72 h-92 p-4 rounded-lg flex flex-col items-center hover:bg-halfords-orange-500">
          <div class="w-56 h-36 bg-white border border-black flex items-center justify-center"
            @click="openModal(extraCables)">
            <img :src="extraCables.PartImage" :alt="extraCables.Part" class="w-full h-full object-contain" />
          </div>
          <p class="mt-3 font-bold text-black text-3xl text-center">{{ extraCables.Part }}</p>
          <p class="text-gray-600 text-center">{{ extraCables.Description }}</p>
          <button @click="openModal(extraCables)" class="font-bold">View Details</button>
        </div>
      </div>
    </div>

    <div v-if="!fullKits.length && !fascias.length">
      <p class="text-red-500 bg-halfords-background-950 px-1 text-lg font-bold mb-4">No Radio Data Available</p>
      <RouterLink :to="`/vehicle-select/${make}/${model}/${year}`"
        class="bg-red-500 px-4 py-2 rounded-lg shadow-md text-xl font-bold hover:bg-red-700">Return
      </RouterLink>
    </div>
  </main>

  <RadioModal v-if="showModal" :item="selectedItem" @close="closeModal" />
</template>
