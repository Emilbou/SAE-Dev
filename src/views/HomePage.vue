<template>
  <div class="bg-orange-50">
    <HeaderXs />
    <ArtisteHP image1="src/assets/HomePage/Rectangle10.png" texte1="The Strokes" />
    <ArtisteHP image1="src/assets/HomePage/Rectangle11.png" texte1="Tame Impala" />
    <ArtisteHP image1="src/assets/HomePage/Rectangle12.png" texte1="Cage The Elephant" />
    <RetrouvezArtistes />
    <hr />
    <ReservezBillets />
    <Footer />
  </div>
</template>

<script>
import HeaderXs from "../components/HeaderXs.vue";
import ArtisteHP from "../components/HomePage/ArtisteHP.vue";
import RetrouvezArtistes from "../components/HomePage/RetrouvezArtistes.vue";
import ReservezBillets from "../components/HomePage/ReservezBillets.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { HeaderXs, ArtisteHP, RetrouvezArtistes, ReservezBillets, Footer },
};
</script>
