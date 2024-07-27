<script setup lang='ts'>
const { imgZoomInWhileScroll, pageTransitionEnter } = useGsap()


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
   <BaseAnimatedLanding src="/contact.jpg" />
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