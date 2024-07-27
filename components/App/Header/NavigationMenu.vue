<script setup lang='ts'>
import { HEADER_LINKS, SOCIAL_MEDIA } from "~/constants"
const route = computed(() => useRoute())
const activePath = computed(() => route.value.path)

</script>

<template>
 <nav id='nav' class='w-full h-[100vh] translate-y-[100%] z-30 left-0 top-0 fixed md:hidden'>

  <!-- <div class="__overlay absolute top-0 left-0 w-full h-1/2  bg-gradient-to-t from- via-black via-20% " /> -->
  <!-- overlays -->
  <!-- <div class="__overlay absolute top-0 left-0 w-full h-1/2  bg-gradient-to-b from-transparent via-10% to-black " /> -->
  <!-- overlays -->
  <!-- overlays -->
  <BaseWrapper class="flex  pt-20 text-white/60 gap-5 items-center capitalize text-2xl justify-evenly flex-col">
   <div class="header__link-group w-full space-y-3">
    <div :class="{ 'text-white is-active group': link.path === activePath }" v-for="link in HEADER_LINKS"
     class="cursor-pointer">
     <NuxtLink :to="{ path: link.path }" class="block relative">
      <span class="active__dot absolute right-0  top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
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

<style scoped>
.u-overlay {
 background: linear-gradient(to top, black 0%, rgba(0, 0, 0, 0.738) 19%, rgba(0, 0, 0, 0.541) 34%, rgba(0, 0, 0, 0.382) 47%, rgba(0, 0, 0, 0.278) 56.5%, rgba(0, 0, 0, 0.194) 65%, rgba(0, 0, 0, 0.126) 73%, rgba(0, 0, 0, 0.075) 80.2%, rgba(0, 0, 0, 0.042) 86.1%, rgba(0, 0, 0, 0.021) 91%, rgba(0, 0, 0, 0.008) 95.2%, rgba(0, 0, 0, 0.002) 98.2%, transparent 100%);
}
</style>