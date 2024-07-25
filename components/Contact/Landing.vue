<script setup lang='ts'>
const { imgZoomInWhileScroll, pageTransitionEnter } = useGsap()
const loaderStore = useLoaderStore()


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
   <NuxtImg ref="UImg" src="/contact.jpg" class="landing__img h-full absolute top-0 w-full bg-cover bg-fixed before:absolute before:w-full before:h-full
   before:top-0 before:left-0 before:bg-black/45 scale-[1.8] origin-center bg-center bg-blue-200" />
   <div class="overlay absolute w-full h-full top-0 left-0 bg-black/45" />
   <!-- <div :style="bgImageStyle"
   class="landing_img_contact h-full  top-0 left-1/2 w-full bg-cover bg-fixed bg-right-bottom" /> -->
   <BaseWrapper class="landing__content text-white flex items-center flex-col justify-center">
    <p class="main-header" once-in>
     CONTACT US
    </p>
    <h1 once-in class="text-2xl sm:text-4xl md:text-[54px]">
     Let's establish relations : )
    </h1>
   </BaseWrapper>
  </div>
 </section>
</template>