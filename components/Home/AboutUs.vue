<script setup lang='ts'>
import { ABOUT_BOXES } from "~/constants"
// const { animateBoxOnScroll } = useGsap()

// onMounted(() => {
//  animateBoxOnScroll()
// })
</script>

<template>
 <section id='about-us' class="overflow-hidden mb-28 mt-10 pb-24">
  <!-- zero_Box -->
  <BaseWrapper class="grid grid-cols-1 gap-6 lg:grid-cols-7 box-wrapper zero-box py-24" data-section-index="1"
   data-box-index="0">
   <!-- mask_img -->
   <div class="img_wrapper lg:mt-14 h-[350px] max-w-lg mx-auto md:h-[420px] lg:col-span-3 p
   x-4 sm:px-6 relative w-full">
    <div class="img__wrapper-bg relative w-full h-full" data-aos="zoom-out-up" data-aos-duration="500">
     <NuxtImg src="/about-us/zero.jpg" class="h-full absolute top-0 left-0 w-full aspect-auto" fit="cover" format="webp"
      sizes="465px, lg:405px" />
     <div class="img_inner p-3 sm:p-4 relative w-full h-full">
      <div class="img__mask w-full h-full bg-white flex items-center justify-center text-center flex-col">
       <h1 class="text-9xl sm:text-[160px] mask_text leading-normal font-bold">14</h1>
       <p class="uppercase text-xs sm:text-sm tracking-[3.5px] font-light text-blak-400">years of experiece</p>
      </div>
     </div>
    </div>
    <!-- <div
     class="bg-white text-blak-800 absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-[93%] h-[93%] flex items-center flex-col justify-center text-center">
     <div class="text-[160px] leading-[32px] font-bold  mask_text">
      14</div>
     <p class="text-sm text-blak-400 uppercase tracking-[3.5px] font-light">years of experience</p>
    </div> -->
   </div>
   <div id="box-zero" class="box__content lg:ms-12 text-center lg:text-left max-w-3xl mx-auto lg:col-span-4">
    <div class="main-header mb-2" once-scroll data-aos="zoom-out" data-aos-duration="500" data-aos-delay="100">about us
    </div>
    <div class="sub-header mt-0 mb-6 lg:my-6 leading-10" once-scroll data-aos="zoom-out" data-aos-duration="500"
     data-aos-delay="200">Break
     out of your routine with a global perspective</div>
    <p class="lg:mb-8 text-black/60 leading-10 sm:leading-8 dark:text-white/60" once-scroll data-aos="zoom-out"
     data-aos-duration="500" data-aos-delay="300">Based on collective work and
     shared
     knowledge,
     Architecture-Studio aims to
     favour dialogue and debate, to
     transform individual knowledge into increased creative potential.</p>
    <p class="text-black/60 dark:text-white/60 leading-10 sm:leading-8" once-scroll data-aos="zoom-out"
     data-aos-duration="500" data-aos-delay="300">
     Our Studio is a architecture practice based in Prague, Chech and Venice. Today, it includes 150 architects, urban
     planners, landscape and interior designers of 25 different nationalities. The company principle of
     Architecture-Studio is the collective conception. From the very beginning, the practice has believed in the virtues
     of exchange, crossing ideas, common effort, shred knowledge.
    </p>
   </div>
  </BaseWrapper>
  <!-- first_box -->
  <BaseWrapper>
   <div class="text-center md:text-left main-header" v-text="'last projects'" data-aos="fade-down"
    data-aos-duration="750" data-aos-delay="200"/>
   <div class="text-center md:text-left sub-header" v-text="'Make it with passion.'" data-aos="fade-down"
    data-aos-duration="750"  />
   <HomeAboutBoxFactory v-for="(box, index) in ABOUT_BOXES" :index="index" :box="box" />
  </BaseWrapper>
  <!-- second_Box -->
  <!-- third_Box -->
  <!-- fourth_Box -->

 </section>
</template>

<style>
.mask_text {
 -webkit-text-fill-color: transparent;
 background-image: url('/about-us/zero.jpg');
 background-size: cover;
 background-position: center;
 background-clip: text;
}
</style>