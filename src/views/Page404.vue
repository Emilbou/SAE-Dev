<template>
  <section>
    <div class="grid h-screen w-screen items-center justify-center bg-orange-50 text-center">
      <RouterLink to="/">
        <p class="justify-center text-5xl font-extrabold text-black md:text-7xl lg:text-9xl">404</p>
      </RouterLink>
      <p class="lg:text-3 justify-center text-xl text-black md:text-7xl">La Page que vous recherchez semble introuvable</p>
    </div>
  </section>
</template>

<script>
import LogoFestivalNoir from "../components/icons/LogoFestivalNoir.vue";

export default {
  components: { LogoFestivalNoir },
};
</script>