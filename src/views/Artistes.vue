<template>
  <div class="bg-orange-50">
    <HeaderXs />
    <p class="p-6 font-unna text-2xl font-bold">
      Retrouvez de nombreux artistes incarnant de véritables icônes de la scène alternative actuelle :
    </p>

    <div class="sm:grid lg:hidden xl:hidden 2xl:hidden">
      <Artistes image1="/images/Programmation/image5-1.jpg" texte1="Tame Impala" />
      <Artistes image1="/images/Programmation/image5-2.jpg" texte1="Peach Pit" />
      <Artistes image1="/images/Programmation/image5-3.jpg" texte1="The Strokes" />
      <Artistes image1="/images/Programmation/image5-4.jpg" texte1="Steeve Lacy" />
      <Artistes image1="/images/Programmation/image5-5.jpg" texte1="Still Woozy" />
      <Artistes image1="/images/Programmation/image5-6.jpg" texte1="Stuck in the Sound" />
      <Artistes image1="/images/Programmation/image5-7.jpg" texte1="Jack Stauber" />
      <Artistes image1="/images/Programmation/image5.jpg" texte1="Alfie Templeman" />
    </div>
    <p class="grid justify-end p-6 font-unna text-2xl font-bold">Et bien d'autres</p>

    <div class="hidden sm:grid lg:grid xl:hidden 2xl:hidden">
      <div class="grid grid-cols-2">
        <Artistes image1="/images/Programmation/image5-1.jpg" texte1="Tame Impala" />
        <Artistes image1="/images/Programmation/image5-2.jpg" texte1="Peach Pit" />
        <Artistes image1="/images/Programmation/image5-3.jpg" texte1="The Strokes" />
        <Artistes image1="/images/Programmation/image5-4.jpg" texte1="Steeve Lacy" />
        <Artistes image1="/images/Programmation/image5-5.jpg" texte1="Still Woozy" />
        <Artistes image1="/images/Programmation/image5-6.jpg" texte1="Stuck in the Sound" />
        <Artistes image1="/images/Programmation/image5-7.jpg" texte1="Jack Stauber" />
        <Artistes image1="/images/Programmation/image5.jpg" texte1="Alfie Templeman" />
      </div>
    </div>

    <div class="hidden sm:hidden lg:hidden xl:grid 2xl:grid">
      <div class="grid grid-cols-3">
        <Artistes image1="/images/Programmation/image5-1.jpg" texte1="Tame Impala" />
        <Artistes image1="/images/Programmation/image5-2.jpg" texte1="Peach Pit" />
        <Artistes image1="/images/Programmation/image5-3.jpg" texte1="The Strokes" />
        <Artistes image1="/images/Programmation/image5-4.jpg" texte1="Steeve Lacy" />
        <Artistes image1="/images/Programmation/image5-5.jpg" texte1="Still Woozy" />
        <Artistes image1="/images/Programmation/image5-6.jpg" texte1="Stuck in the Sound" />
        <Artistes image1="/images/Programmation/image5-7.jpg" texte1="Jack Stauber" />
        <Artistes image1="/images/Programmation/image5.jpg" texte1="Alfie Templeman" />
      </div>
    </div>
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
