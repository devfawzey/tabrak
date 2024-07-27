<script setup lang='ts'>
import { SOCIAL_MEDIA } from '~/constants';


const img = useImage()
const bgUrl = ref(img('/footer.jpg'))
const bgStyle = ref({
 backgroundImage: `url(${bgUrl.value})`
})

</script>

<template>
 <footer id='footer' class='w-full flex items-center justify-center relative footer_height'>
  <div :style="bgStyle"
   class="w-full h-full bg-cover bg-center absolute before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-black/65  before:backdrop-blur-[1px]" />
  <BaseWrapper
   class="grid grid-cols-1 md:grid-cols-2 text-white items-center gap-6 md:gap-12 text-center md:[text-align:-webkit-auto] py-8 place-content-center relative z-1">

   <div class="left__side">
    <NuxtImg format="webp" quality="80" src="/logo.png" sizes="145px" class="mx-auto md:ms-0" />
    <p class="my-6 md:mt-9 md:mb-0 text-white/70  max-w-xl mx-auto">
     The company principle of Architecture-Studio is the collective conception. From the very beginning, the practice has
     believed in the virtues of exchange, crossing ideas, common effort, shared knowledge and enthusiasm.
    </p>
   </div>

   <div class="right__side text-center md:text-right">
    <div class="mb-4 md:mb-9 text-sm tracking-[4.5px] font-light">
     GET IN TOUCH
    </div>
    <div class="text-group text-[13px] space-y-3">
     <p class="phone">+7 (885) 589 69 85</p>
     <p class="email">
      prague-architects@info.com
     </p>
     <p class="location">
      Litačka, Jungmannova 35/29, Nové Město,Czech Republic
     </p>
    </div>
   </div>
   <!-- TODO check this if correct -->
   <hr class="col-span-1 md:col-span-2 bg-white/20" />
   <p class="left__side text-[10px] text-white/70">
    PRAGUE (C) 2019 ALL RIGHTS RESERVED
   </p>
   <div class="right__side social__links flex items-center justify-center md:justify-end gap-6">
    <a v-for="link in SOCIAL_MEDIA" target="_blank" :href="link.link">
     <!-- <UIcon :name="link.light_icon" /> -->
     <UIcon :name="link.icon" dynamic />
    </a>
   </div>
  </BaseWrapper>
 </footer>
</template>

<style scoped>
.footer_height {
 min-height: calc(100vh - 78px);
}
</style>