<script setup lang='ts'>
const btn = ref(null)
const { animateScrollToTopBtn } = useGsap()

const sections = ref() as any
const currentSection = ref<number>(0) // max 6
// const currentSection
// const scrollToNextSection=
onMounted(() => {
 sections.value = document.querySelectorAll(".box-wrapper[data-box-index]")
})
const scrollToNextSection = () => {
 if (currentSection.value >= 6) {
  currentSection.value = 0
 }
 scrollToSection({ target: sections.value[currentSection.value], offsetY: 0 })
 currentSection.value++
}

</script>

<template>
 <UButton square size="xl" id="scroll-to-next-section" ref="btn" @click="scrollToNextSection" icon="i-mdi-chevron-down"
  class="fixed rounded-full z-20 bottom-1/2 left-0 translate-x-4 -translate-y-1/2" />
</template>