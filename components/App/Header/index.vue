
<script setup lang='ts'>
import { HEADER_LINKS } from "@/constants"
const { toggleNavigationMenu } = useGsap()
const mode = useColorMode()
const header = ref()
const isHeaderTop = ref(true)
const isNavActive = ref(false)
const route = computed(() => useRoute())
const activePath = computed(() => route.value.path)

const initHeader = () => {
 // check if header loaded
 if (!header.value) return;

 // 
 if (scrollY >= header.value.offsetHeight / 2) {
  isHeaderTop.value = false
 } else {
  isHeaderTop.value = true
 }

}
const toggleNav = () => isNavActive.value = !isNavActive.value

const toggleDarkMode = () => {
 mode.value = mode.value === 'dark' ? 'light' : 'dark'
}


onMounted(() => {
 initHeader()
 window.addEventListener('scroll', initHeader)
})
onUnmounted(() => {
 window.removeEventListener('scroll', initHeader)
})

watch(isNavActive, (newValue) => {
 toggleNavigationMenu(newValue)
 document.body.style.overflow = 'auto'
 if (!newValue) return;
 document.body.style.overflow = 'hidden'
})
watch(() => useRoute().path, (__) => isNavActive.value = false)
</script>

<template>
 <header id='header' ref="header" class='fixed top-0 z-20 left-0 w-full transition-[padding] duration-300 select-none'
  :class="{ 'py-3': isHeaderTop }">
  <div
   class="bg-gradient bg-gradient-to-r z-30 from-black to-black/95 backdrop-blur-lg transition-all duration-300 absolute top-0 left-0 w-full h-full dark:ring-1 dark:ring-accent"
   :class="{ '!opacity-0': isHeaderTop }">
  </div>
  <BaseWrapper class="grid min-h-16 z-40 auto-cols-max grid-flow-col items-center justify-between py-4">
   <!--  -->
   <NuxtImg @click="toggleDarkMode" sizes="145px" src="/logo.png" fit="contian" class="aspect-auto h-[95%]" />
   <!--  -->
   <div class="links__group">
    <ul class="header__links hidden text-white/85 md:flex items-center gap-8 font-[poppins] text-xs [&>li]:cursor-pointer">
     <li v-for="link in HEADER_LINKS" class="capitalize" :class="{ 'link-is-active  !text-white': activePath === link.path }">
      <NuxtLink :to="{ path: link.path }">
       {{ link.title }}
      </NuxtLink>
     </li>
    </ul>
    <!-- TODO -->
    <UButton size="lg" color="white" variant="outline" @click="toggleNav"
     class="text-2xl md:hidden bg-transparent text-white rounded-full w-18 h-18 dark:hover:bg-white/10 hover:bg-white/10">
     <UIcon name="solar:hamburger-menu-linear" class="text-white" dynamic />
    </UButton>
   </div>
  </BaseWrapper>
  <!-- navigation -->
  <AppHeaderNavigationMenu :is-nav-active="isNavActive" @close-nav="isNavActive = false" />
 </header>
</template>