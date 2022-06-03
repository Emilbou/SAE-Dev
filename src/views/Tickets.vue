<template>
  <div>
    <HeaderXs />
    <nav class="text-lg text-blue-300 underline">
      <RouterLink to="/CreateFB">Création FireBase FireBase </RouterLink>
      <br />
      <RouterLink to="/AffichageListeFB">Affichage Liste FireBase </RouterLink>
    </nav>
  </div>
</template>

<script>
import HeaderXs from "../components/HeaderXs.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { HeaderXs },
};
</script>
