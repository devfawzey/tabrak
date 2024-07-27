
<script setup lang='ts'>
const { imgZoomInWhileScroll } = useGsap()
onMounted(() => {
  window.addEventListener('scroll', imgZoomInWhileScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', imgZoomInWhileScroll)
})


</script>

<template>
  <section id='landing' class='w-full h-[120vh] relative overflow-hidden section-wrapper' data-section-index="0">
    <!-- landing__animation -->

    <div class="landing__content w-full h-full  flex items-center overflow-hidden justify-center">
      <!-- TODO IMG -->
      <BaseAnimatedLanding overlay="bg-black/0"/>

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
        <UButton size="xl" id="explore-btn" once-in @click="scrollToSection({ target: '#about-us' })" color="primary"
          variant="outline"
          class="relative hover:text-black hover:ring-accent dark:hover:ring-white hover:bg-white/90 rounded-none px-14 py-4 dark:text-white dark:hover:bg-white dark:hover:text-black text-white font-light text-xs before:absolute before:top-1/2 before:left-[-6%] before:w-[12%] before:h-[1px] before:bg-white  after:absolute after:top-1/2 after:right-[-6%] after:w-[12%] after:h-[1px] after:bg-white before:-translate-y-1/2 after:-translate-y-1/2">
          <span class="uppercase tracking-[2px]">
            Explore it
          </span>
        </UButton>
      </BaseWrapper>
    </div>
  </section>
</template>

