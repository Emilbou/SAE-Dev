<!--Mettre le texte en props-->
<template>
  <div class="bg-orange-50">
    <HeaderXs />
    <div class="grid grid-cols-2">
      <Dates Dates="Vendredi 19 Août :" />

      <p class="text-transparent">.</p>
      <BullesProgrammation image1="src/assets/Programmation/image5-1.png" texte1="Test" />
      <p class="text-transparent">.</p>
      <p class="text-transparent">.</p>
      <BullesProgrammation image1="src/assets/Programmation/image5-2.png" texte1="Test" />
      <BullesProgrammation image1="src/assets/Programmation/image5-3.png" texte1="Test" />
      <p class="text-transparent">.</p>
      <Dates Dates="Samedi 20 Août :" />
      <p class="text-transparent">.</p>
      <p class="text-transparent">.</p>
      <BullesProgrammation image1="src/assets/Programmation/image5-4.png" texte1="Test" />
      <p class="text-transparent">.</p>
      <p class="text-transparent">.</p>
      <BullesProgrammation image1="src/assets/Programmation/image5-5.png" texte1="Test" />
      <p class="text-transparent">.</p>
      <Dates Dates="Dimanche 21 Août :" />
      <p class="text-transparent">.</p>
      <p class="text-transparent">.</p>
      <BullesProgrammation image1="src/assets/Programmation/image5-6.png" texte1="Test" />
      <p class="text-transparent">.</p>
      <p class="text-transparent">.</p>
      <BullesProgrammation image1="src/assets/Programmation/image5-7.png" texte1="Test" />
      <p class="text-transparent">.</p>
      <p class="text-transparent">.</p>
      <BullesProgrammation image1="src/assets/Programmation/image5.png" texte1="Test" />
    </div>
  </div>
  <Footer />
</template>


<script>
import HeaderXs from "../components/HeaderXs.vue";
import Dates from "../components/Programmation/Dates.vue";
import BullesProgrammation from "../components/Programmation/BullesProgrammation.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { HeaderXs, Dates, BullesProgrammation, Footer },
};
</script>
