
import type { NuxtImg } from '#build/components';
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
 <section id='landing' class='w-full h-screen relative overflow-hidden'>
  <div class="landing__content w-full h-full flex items-center justify-center">
   <!-- <div :style="bgImageStyle"
    class="landing__img h-full absoute top-0 w-full bg-cover bg-fixed before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black/45  scale-[1.8] origin-top absolute bg-center bg-blue-200" /> -->

   <NuxtImg   src="/landing/1.jpg"
    class="landing__img h-full absoute top-0 w-full bg-cover bg-fixed before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black/45  scale-[1.8] origin-center absolute bg-center bg-blue-200" />
   <BaseWrapper class="landing__content text-white flex items-center flex-col justify-center">
    <p class="main-header" once-in>
     About US
    </p>
    <h1 once-in class="text-2xl sm:text-4xl md:text-[54px]">
     WE ARE establish relations : )
    </h1>
   </BaseWrapper>
  </div>
 </section>
</template>