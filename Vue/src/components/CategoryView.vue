<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import categoryDataList from "@/components/Data/Categories/Categories";
import subCategoryDataList from "@/components/Data/SubCategories/SubCategories";
import router from '@/router';

interface SubCategory {
  id: string;
  heading: string | null;
  title: string;
  description: string;
  startDate?: string | null;
  endDate?: string | null;
  category: string;
  image?: string;
}

interface CategoryData {
  id: string;
  title: string;
  description: string;
  url: string;
}

const route = useRoute();
const selectedTab = ref<string>(route.path.split("/")[1]);
const selectedCategory = ref<string>(route.path.split("/")[2]);
const subCategoriesData = ref<SubCategory[]>(subCategoryDataList);
const categoryData = ref<CategoryData | null>(null);
const uniqueHeadings = ref<string[]>([]);

const fetchSubCategoriesData = () => {
  subCategoriesData.value = subCategoryDataList.filter(
    (subCategory) => subCategory.category === selectedCategory.value
  );

  uniqueHeadings.value = [
    ...new Set(
      subCategoriesData.value
        .map((subCat) => subCat.heading)
        .filter((heading): heading is string => heading !== null)
    ),
  ].sort((a, b) => a.localeCompare(b));
};


const fetchCategoriesData = () => {
  const cat = categoryDataList.find((cat) => cat.url === selectedCategory.value);
  if (cat) {
    categoryData.value = cat;
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const scrollToHeading = (heading: string) => {
  console.log(`Trying to scroll to: heading-${heading}`);
  const headingElement = document.getElementById(`heading-${heading}`);
  if (headingElement) {
    const offset = -25;
    window.scrollTo({
      top: headingElement.offsetTop + offset,
      behavior: "smooth",
    });
  } else {
    console.error(`Element not found: heading-${heading}`);
  }
};

const goBack = () => {
  router.back();
};

onMounted(() => {
  fetchSubCategoriesData();
  fetchCategoriesData();
});

watch(
  () => [route.params.tabs, route.params.category],
  ([newTabs, newCategory]) => {
    selectedTab.value = newTabs ? String(newTabs) : '';
    selectedCategory.value = newCategory ? String(newCategory) : '';
    fetchSubCategoriesData();
    fetchCategoriesData();
  }
);

const groupedSubcategories = computed(() => {
  const groups: { [key: string]: SubCategory[] } = {};
  subCategoriesData.value.forEach((subcategory) => {
    const heading = subcategory.heading || 'Uncategorized';
    if (!groups[heading]) {
      groups[heading] = [];
    }
    groups[heading].push(subcategory);
  });
  return Object.values(groups);
});
</script>


<template>

  <body class="md:flex">
    <p>Similar web based system</p>
  </body>

</template>
