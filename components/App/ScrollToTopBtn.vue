<script setup lang='ts'>
const scrollSectionStore = useScrollSection()
const currentSection = computed(() => scrollSectionStore.currentSection)
const sections = ref()
const scrollToNextSection = () => {
  if (currentSection.value >= sections.value.length - 1) return;
  const section = `[data-section-index='${currentSection.value + 1}']`
  scrollToSection({ target: section })
  scrollSectionStore.setSection(currentSection.value + 1)
}
const scrollToPreviousSection = () => {
  if (currentSection.value <= 0) return;
  const section = `[data-section-index='${currentSection.value - 1}']`
  scrollToSection({ target: section })
  scrollSectionStore.setSection(currentSection.value - 1)
}
onMounted(() => {
  sections.value = document.querySelectorAll('[data-section-index]')
})
onUnmounted(() => {
  scrollSectionStore.setSection(0)
})
</script>

<template>
  <div class="btn_group">
    <UButton square size="xl" id="scroll-to-top-btn" ref="btn" @click="scrollToSection({ target: 0 })"
      icon="i-mdi-chevron-up" class="fixed rounded-full z-20 scale-1 bottom-0 right-0 -translate-x-4 -translate-y-4" />
    <!-- <UButton square size="xl" id="scroll-to-next-section" icon="i-mdi-chevron-down" @click="scrollToNextSection"
      class="fixed rounded-full z-20  right-0 -translate-x-4 bottom-0 -translate-y-4" /> -->
  </div>
</template>