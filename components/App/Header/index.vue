
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
  const landingSection = document.querySelector("section#landing") as HTMLElement
  const landingOffset = landingSection?.offsetHeight ?? 200
  const offsetHeader = header.value.offsetHeight ?? 80
  // 
  if (scrollY >= landingOffset - offsetHeader) {
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

// TODO??
watch(isNavActive, (newValue) => {
  toggleNavigationMenu(newValue)
  // document.body.style.overflow = 'auto'
  // if (!newValue) return;
  // document.body.style.overflow = 'hidden'
})
watch(() => useRoute().path, (__) => isNavActive.value = false)
</script>

<template>
  <header id='header' ref="header" class='fixed top-0 z-40 left-0 w-full transition-[padding] duration-300 select-none'
    :class="{ 'py-3': isHeaderTop }">
    <div
      class="bg-gradient z-30 bg-black transition-all duration-300 absolute top-0 left-0 w-full h-full dark:ring-1 ring-accent shadow-lg"
      :class="{ '!opacity-0': isHeaderTop }">
    </div>
    <BaseWrapper class="grid min-h-16 z-40 auto-cols-max grid-flow-col-dense items-center justify-between py-4">
      <!--  -->
      <NuxtLink to="/" class="h-full">
        <NuxtImg format="webp" quality="80" src="/logo.png" class="h-full max-h-[90%]" sizes="100px, sm:145px"
          fit="cover" />
      </NuxtLink>
      <!--  -->
      <div class="links__group">
        <ul
          class="header__links hidden text-white/85 dark:text-white/85 md:flex items-center gap-8 font-[poppins] text-sm [&>li]:cursor-pointer">
          <li v-for="link in HEADER_LINKS"
            class="capitalize relative before:absolute before:w-[6px] before:h-[6px] before:left-1/2 before:-translate-x-1/2 before:bottom-0 before:rounded-full before:translate-y-3"
            :class="[activePath === link.path && !isHeaderTop ? 'link-is-active before:bg-white dark:before:bg-white  text-white dark:!text-white' : '', isHeaderTop ? 'text-white' : '', activePath === link.path && isHeaderTop ? 'before:bg-white dark:before:bg-white' : '']">
            <NuxtLink :to="{ path: link.path }">
              {{ link.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <!-- TODO -->
      <UButton size="lg" color="white" variant="outline" @click="toggleNav"
        class="text-2xl font-thin md:hidden bg-transparent text-white ring-white rounded-full w-18 h-18 dark:hover:bg-white/10 hover:bg-white/10">
        <UIcon :name="isNavActive ? 'material-symbols-light:close' : 'akar-icons:two-line-horizontal'" dynamic />
      </UButton>
      <!-- colorMode -->
    </BaseWrapper>
    <!-- navigation -->
  </header>
  <AppHeaderNavigationMenu :is-nav-active="isNavActive" @close-nav="isNavActive = false" />

  <div class="overlay-system z-20 pointer-events-none opacity-0 fixed top-0 left-0 h-full w-full backdrop-blur-sm">
    <!-- half-bg -->
    <div class="__overlay absolute bottom-0 left-0 w-full  h-1/2  bg-black" />
    <!-- overlays -->
    <div
      class="__overlay absolute top-0 left-0 w-full h-1/2  bg-gradient-to-t from-black via-55% via-black to-black/70" />

  </div>
</template>