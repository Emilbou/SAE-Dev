<template>
  <section class="bg-orange-50">
    <h1 class="w-auto bg-black p-2 text-center text-2xl text-white">Style Guide</h1>
    <div class="p-9">
      <p>Header</p>
      <HeaderXs />
      <br />
      <p>Footer</p>
      <Footer />

      <div>
        <p>Icones artistes</p>
        <ArtisteHP image1="src/assets/HomePage/Rectangle10.png" />
        <br />
        <p>Réservation billets</p>
        <ReservezBillets />
        <br />
        <p>Page Artiste</p>
        <RetrouvezArtistes />
      </div>

      <div>
        <p>Icones artistes</p>
        <Artistes image1="src\assets\Programmation\image5-2.png" />
        <br />
      </div>

      <div>
        <p>Bouton</p>
        <Bouton />
        <br />
        <p>Input</p>
        <Input />
        <br />
        <p>Message</p>
        <Message />
        <br />
      </div>

      <div>
        <p>Bulles Programmation</p>
        <BullesProgrammation image1="src\assets\Programmation\image5-6.png" />
        <br />
        <p>Dates</p>
        <Dates Dates="17 Octobre 2019" />
        <br />
      </div>
    </div>
  </section>
</template>

<script>
import HeaderXs from "../components/HeaderXs.vue";
import Footer from "../components/Footer.vue";
import ArtisteHP from "../components/HomePage/ArtisteHP.vue";
import ReservezBillets from "../components/HomePage/ReservezBillets.vue";
import RetrouvezArtistes from "../components/HomePage/RetrouvezArtistes.vue";
import Artistes from "../components/Artistes/Artistes.vue";
import Bouton from "../components/Nouscontacter/Bouton.vue";
import Input from "../components/Nouscontacter/Input.vue";
import Message from "../components/Nouscontacter/Message.vue";
import BullesProgrammation from "../components/Programmation/BullesProgrammation.vue";
import Dates from "../components/Programmation/Dates.vue";

export default {
  components: {
    HeaderXs,
    Footer,
    ArtisteHP,
    ReservezBillets,
    RetrouvezArtistes,
    Artistes,
    Bouton,
    Input,
    Message,
    BullesProgrammation,
    Dates,
  },
};
</script>
