
<script setup lang='ts'>
const { imgZoomInWhileScroll } = useGsap()
const scrollSectionStore = useScrollSection()
onMounted(async () => {
  window.addEventListener('scroll', imgZoomInWhileScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', imgZoomInWhileScroll)
})

const scrollToAboutZeroSection = () => {
  // if (currentSection.value >= sections.value.length - 1) return;
  const section = `[data-section-index='${1}']`
  scrollToSection({ target: section })
  scrollSectionStore.setSection(1)
}

</script>

<template>
  <section id='landing' class='w-full h-screen relative overflow-hidden section-wrapper' data-section-index="0">
    <!-- landing__animation -->

    <div class="landing__content w-full h-full  flex items-center justify-center">
      <!-- <div :style="bgImageStyle"
        class="landing__img h-full absoute top-0 left-1/2  w-full  bg-cover bg-fixed before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black/45 scale-[1.8]  origin-top absolute bg-center"> -->
      <!-- TODO IMG -->
      <NuxtImg src="/projects/8_.png" placeholder="/projects/8_.png" alt="landing__img" format="webp"
        class="landing__img h-full absolute top-0 w-full bg-cover bg-fixed before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black/45  scale-[1.8] origin-center  bg-center bg-blue-200" />
      <div class="overlay absolute w-full h-full top-0 left-0 bg-black/45" />
      <BaseWrapper once-in class="text-center flex items-center justify-center flex-col">
        <div once-in class="main-header text-white/95">VOROHTA, UKRAINE</div>
        <div once-in class="text-4xl lg:text-[54px] mt-4 mb-8 sm:mt-8 sm:mb-12 font-semibold text-white">
          Awesome Design for the Vorokhta Hub
          <!-- canLoad::{{ canLoad }} -->
        </div>
        <p once-in class="mb-6 text-white/80 max-w-xl mx-auto">
          The main objective of the project – transformation of Vorokhta City in innovative
          <br />
          SMART CITY (village) and tourist center.
        </p>
        <!-- TODO -->
        <UButton size="xl" id="explore-btn" once-in @click="scrollToAboutZeroSection" color="primary" variant="outline"
          class="relative hover:text-black hover:ring-accent dark:hover:ring-white hover:bg-white/90 rounded-none px-14 py-4 dark:text-white dark:hover:bg-white dark:hover:text-black text-white font-light text-xs before:absolute before:top-1/2 before:left-[-6%] before:w-[12%] before:h-[1px] before:bg-white  after:absolute after:top-1/2 after:right-[-6%] after:w-[12%] after:h-[1px] after:bg-white before:-translate-y-1/2 after:-translate-y-1/2">
          <span class="uppercase tracking-[2px]">
            Explore it
          </span>
        </UButton>
      </BaseWrapper>
    </div>
  </section>
</template>
