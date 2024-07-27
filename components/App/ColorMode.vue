<script setup>
const modeIcon = computed(() => `material-symbols-light:${useColorMode().value !== 'dark' ? 'dark' : 'light'}-mode-outline-rounded`)

</script>
<template>
 <UButton size="md" class="rounded-full transition-colors" variant="ghost"
  @click="$colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'">
  <template #trailing>
   <UIcon :name="modeIcon" class="w-6 h-6" />
  </template>
  <!-- <ColorScheme placeholder="..." tag="span">
   Color mode: <b>{{ $colorMode.preference }}</b>
   <span v-if="$colorMode.preference === 'system'">(<i>{{ $colorMode.value }}</i> mode detected)</span>
  </ColorScheme> -->
 </UButton>
</template>