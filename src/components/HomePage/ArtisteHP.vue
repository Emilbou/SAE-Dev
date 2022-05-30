<template>
  <div v-if="!menuOuvert" class="bg-orange-50">
    <div class="my-9">
      <!--partie contenu-->
      <div class="grid justify-center">
        <div class="ml-auto mr-auto">
          <img :src="image1" />
        </div>

        <!--Cercle+ fleche avec router link-->
        <div class="mx-12 -my-[70px]">
          <RouterLink to="/Artistes">
            <p class="-my-2 py-3 font-roboto text-3xl text-white">{{ texte1 }}</p>
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-white">
              <svg
                width="30"
                height="23"
                viewBox="0 0 30 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M28.8534 12.8226C29.4392 12.2368 29.4392 11.2871 28.8534 10.7013L19.3074 1.15536C18.7217 0.569574 17.7719 0.569574 17.1861 1.15536C16.6003 1.74115 16.6003 2.6909 17.1861 3.27668L25.6714 11.762L17.1861 20.2472C16.6003 20.833 16.6003 21.7828 17.1861 22.3686C17.7719 22.9544 18.7217 22.9544 19.3074 22.3686L28.8534 12.8226ZM0.0583496 13.262H27.7927V10.262H0.0583496V13.262Z"
                  fill="black"
                ></path>
              </svg>
            </div>
          </RouterLink>
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