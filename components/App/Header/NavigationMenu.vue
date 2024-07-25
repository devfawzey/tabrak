<script setup lang='ts'>
import { HEADER_LINKS, SOCIAL_MEDIA } from "~/constants"
const route = computed(() => useRoute())
const activePath = computed(() => route.value.path)

</script>

<template>
 <nav id='nav'
  class='w-full h-[100vh] translate-y-[100%]  origin-top z-[9]  bg-gradient-to-t from-black backdrop-blur-lg to-black/80 left-0 top-0 absolute md:hidden'>
  <BaseWrapper class="flex pt-20 text-white/60 gap-5 items-center capitalize text-2xl justify-evenly flex-col">
   <div class="header__link-group w-full space-y-3">
    <div :class="{ 'text-white is-active group': link.path === activePath }" v-for="link in HEADER_LINKS"
     class="cursor-pointer">
     <NuxtLink :to="{ path: link.path }" class="block relative">
      <span class="active__dot absolute right-0  top-1/2 -translate-y-1/2 w-3 h-3 rounded-full z-20"
       :class="{ 'bg-white': link.path === activePath }" />
      <span class="text-5xl sm:text-7xl">
       {{ link.title }}
      </span>
     </NuxtLink>
    </div>
   </div>
   <!-- social-media -->
   <div class="social_media flex flex-wrap items-center gap-6 justify-center">
    <a :href="link.link" target="_blank" v-for="link in SOCIAL_MEDIA">
     <UIcon :name="link.icon" dynamic />
    </a>
   </div>
  </BaseWrapper>
 </nav>
</template>

<!-- <style scoped>
nav#nav {
 transition: transform cubic-bezier(0.76, 0, 0.24, 1) 0.6s;
}
</style> -->