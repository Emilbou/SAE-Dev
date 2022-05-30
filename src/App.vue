<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<script>
import LogoFestival from "./components/icons/LogoFestival.vue";

import ArtisteHP from "./components/HomePage/ArtisteHP.vue";
export default {
  components: { LogoFestival, ArtisteHP },
  name: "",
  data() {
    return {
      menuOuvert: false,
    };
  },
};
</script>
