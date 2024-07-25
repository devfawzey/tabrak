<script setup lang="ts">
const showSectionControlBtn = computed(() => useRoute().path === '/')

</script>

<template>
 <AppHeader />
 <AppScrollToTopBtn v-if="showSectionControlBtn" />
 <!-- <AppScrollToNextSection /> -->
 <slot />
 <AppFooter />
</template>