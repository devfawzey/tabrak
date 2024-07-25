<script setup lang='ts'>

defineProps({
 color: {
  type: String,
  default: "bg-black/70 after:bg-black/70 before:bg-black/70"
 }
})

</script>

<template>
 <div id='long-arrow-right' :class="color"
  class='long-arrow-right inline-block relative w-6 h-[1px] z-2 before:z-1 after:z-1  dark:bg-white/70 before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-full before:origin-right before:rotate-45  after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-1 after:h-full after:origin-right after:-rotate-45  dark:after:bg-white/70 dark:before:bg-white/70 transition-all' />
</template>