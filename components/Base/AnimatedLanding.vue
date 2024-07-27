<script setup>
defineProps({
  src: {
    type: String,
    default: "/landing/3.jpg",
  },
  overlay: {
    type: String,
    default: "bg-black/45"
  }
})
</script>
<template>
  <NuxtImg :src="src" alt="landing__img" format="webp"
    class="landing__img aspect-auto h-auto max-w-none min-h-full max-h-none min-w-full absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 bg-center bg-cover md:bg-contain before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black/45  scale-[1.8] origin-top  bg-blue-200 u-animate" />
  <div class="overlay absolute top-0 w-full h-full left-0" :class="overlay" />
</template>

<style scoped>
.u-animate {
  animation: landing 30s ease-in-out infinite 5s;
}

@keyframes landing {

  from,
  to {
    scale: 1
  }

  50% {
    scale: 1.2
  }
}
</style>