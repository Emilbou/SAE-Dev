<template>
  <div v-if="!menuOuvert" class="bg-orange-50">
    <div class="my-[60px] p-7">
      <!--partie contenu-->
      <div class="grid justify-center">
        <div class="ml-auto mr-auto">
          <img class="rounded-xl" :src="image1" />

          <p class="-my-[60px] text-center font-roboto text-4xl text-white">{{ texte1 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    image1: String,
    texte1: String,
  },
};
</script>
