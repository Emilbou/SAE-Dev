<template>
  <div class="bg-orange-50">
    <HeaderXs />

    <div class="sm:grid lg:hidden xl:hidden 2xl:hidden">
      <ArtisteHP image1="src/assets/HomePage/Rectangle10.png" texte1="The Strokes" />
      <ArtisteHP image1="src/assets/HomePage/Rectangle11.png" texte1="Tame Impala" />
      <ArtisteHP image1="src/assets/HomePage/Rectangle12.png" texte1="Cage The Elephant" />
      <RetrouvezArtistes />
    </div>

    <div class="hidden sm:hidden lg:grid xl:hidden 2xl:hidden">
      <div class="grid grid-flow-col grid-rows-3 gap-4">
        <ArtisteHP class="row-span-3" image1="../assets/HomePage/Rectangle10.png" texte1="The Strokes" />
        <ArtisteHP class="col-span-2" image1="../assets/HomePage/Rectangle11.png" texte1="Tame Impala" />
        <ArtisteHP class="col-span-2 row-span-2" image1="../assets/HomePage/Rectangle12.png" texte1="Cage The Elephant" />
      </div>
      <RetrouvezArtistes />
    </div>

    <div class="-z-50 hidden sm:hidden lg:hidden xl:grid 2xl:grid">
      <div class="grid grid-flow-col grid-rows-2 gap-4">
        <ArtisteHP class="row-span-3" image1="../assets/HomePage/Rectangle10.png" texte1="The Strokes" />
        <ArtisteHP class="col-span-2" image1="../assets/HomePage/Rectangle11.png" texte1="Tame Impala" />
        <ArtisteHP class="col-span-2 row-span-2 -mt-[200px]" image1="../assets/HomePage/Rectangle12.png" texte1="Cage The Elephant" />
        <RetrouvezArtistes class="col-span-3" />
      </div>
    </div>

    <hr />
    <ReservezBillets class="z-50" />
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
