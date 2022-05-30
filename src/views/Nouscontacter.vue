<template>
  <div class="bg-orange-50">
    <HeaderXs />
    <p class="p-6 font-unna text-4xl font-bold">Quelque chose à nous dire ?</p>

    <Input texte1="Objet*" />
    <Input texte1="email*" />
    <Input texte1="Nom*" />
    <Input texte1="Prénom*" />
    <Message texte1="Votre Message*" />
  </div>
  <Footer />
</template>

<script>
import HeaderXs from "../components/HeaderXs.vue";
import Input from "../components/Nouscontacter/Input.vue";
import Message from "../components/Nouscontacter/Message.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { HeaderXs, Input, Message, Footer },
};
</script>



  