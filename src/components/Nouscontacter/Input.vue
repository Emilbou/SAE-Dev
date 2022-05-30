<template>
  <div class="p-5">
    <div class="w-auto">
      <input
        type="text"
        :placeholder="texte1"
        class="
          focus
          bottom-7
          my-1
          h-[51px]
          w-full
          overflow-hidden
          rounded-tl-[22.81px] rounded-tr-[22.81px] rounded-bl-[22.81px] rounded-br-[22.81px]
          bg-white
          p-4
          font-roboto
          text-xl
          font-medium
          text-[#a4a4a4]
          outline-none
        "
      />
    </div>
  </div>
</template>



<script>
export default {
  props: {
    texte1: String,
  },
};
</script>
