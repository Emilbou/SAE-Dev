<template>
  <div class="bg-orange-50">
    <HeaderXs />
    <p class="p-6 font-unna text-2xl font-bold">
      Retrouvez de nombreux artistes incarnant de véritables icônes de la scène alternative actuelle :
    </p>

    <Artistes image1="src/assets/Programmation/image5-1.png" texte1="Tame Impala" />
    <Artistes image1="src/assets/Programmation/image5-2.png" texte1="Peach Pit" />
    <Artistes image1="src/assets/Programmation/image5-3.png" texte1="The Strokes" />
    <Artistes image1="src/assets/Programmation/image5-4.png" texte1="Steeve Lacy" />
    <Artistes image1="src/assets/Programmation/image5-5.png" texte1="Still Woozy" />
    <Artistes image1="src/assets/Programmation/image5-6.png" texte1="Stuck in the Sound" />
    <Artistes image1="src/assets/Programmation/image5-7.png" texte1="Jack Stauber" />
    <Artistes image1="src/assets/Programmation/image5.png" texte1="Alfie Templeman" />

    <p class="grid justify-end p-6 font-unna text-2xl font-bold">Et bien d'autres</p>
  </div>
  <Footer />
</template>

<script>
import HeaderXs from "../components/HeaderXs.vue";
import Artistes from "../components/Artistes/Artistes.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { HeaderXs, Artistes, Footer },
};
</script>
