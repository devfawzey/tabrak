<script setup lang='ts'>
import { ABOUT_BOXES } from "~/constants"
// const { animateBoxOnScroll } = useGsap()

// onMounted(() => {
//  animateBoxOnScroll()
// })
</script>

<template>
 <section id='about-us' class="overflow-hidden mb-28 pt-10 pb-24">
  <!-- zero_Box -->
  <BaseWrapper class="grid grid-cols-1 gap-6 lg:grid-cols-7  box-wrapper zero-box py-24" data-section-index="1"
   data-box-index="0">
   <div class="lg:mt-16 img__wrapper mx-auto lg:col-span-3 max-w-lg">
    <NuxtImg  data-wrapper src="/about-us/zero.jpg" format="webp" sizes="420px" class="h-full max-w-full aspect-auto max-h-[300px] sm:max-h-none" once-scroll />
   </div>
   <div id="box-zero"  class="box__content lg:ms-12 text-center lg:text-left max-w-3xl mx-auto lg:col-span-4">
    <div class="main-header" once-scroll>about us</div>
    <div class="sub-header my-6 leading-10" once-scroll>Break out of your routine with a global perspective</div>
    <p class="lg:mb-8 text-black/60 leading-10 sm:leading-8 dark:text-white/60" once-scroll>Based on collective work and
     shared
     knowledge,
     Architecture-Studio aims to
     favour dialogue and debate, to
     transform individual knowledge into increased creative potential.</p>
    <p class="text-black/60 dark:text-white/60 leading-10 sm:leading-8" once-scroll>
     Our Studio is a architecture practice based in Prague, Chech and Venice. Today, it includes 150 architects, urban
     planners, landscape and interior designers of 25 different nationalities. The company principle of
     Architecture-Studio is the collective conception. From the very beginning, the practice has believed in the virtues
     of exchange, crossing ideas, common effort, shred knowledge.
    </p>
   </div>
  </BaseWrapper>
  <!-- first_box -->
  <BaseWrapper>
   <div class="text-center md:text-left main-header" v-text="'last projects'" />
   <div class="text-center md:text-left sub-header" v-text="'Make it with passion.'" />
   <HomeAboutBoxFactory v-for="(box, index) in ABOUT_BOXES" :index="index" :box="box" />
  </BaseWrapper>
  <!-- second_Box -->
  <!-- third_Box -->
  <!-- fourth_Box -->

 </section>
</template>