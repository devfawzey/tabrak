<script setup lang='ts'>

const { animateScrollToTopBtn } = useGsap()
const showBtn = ref(false)

const canShowBtn = () => scrollY >= 400 ? showBtn.value = true : showBtn.value = false

onMounted(() => { canShowBtn(); window.addEventListener('scroll', canShowBtn) })
onUnmounted(() => window.removeEventListener('scroll', canShowBtn)) // cannot unmounted because its global in default_layout

watch(showBtn, (newValue) => animateScrollToTopBtn(newValue))

</script>

<template>
  <div class="btn_group">
    <UButton square size="xl" color="black" id="scroll-to-top-btn" ref="btn" @click="scrollToSection({ target: 0 })"
      icon="i-mdi-chevron-up" class="fixed bg-black rounded-full z-20 scale-0 bottom-0 right-0 -translate-x-4 -translate-y-4" />
  </div>
</template>