<script setup lang='ts'>

const props = defineProps({
  routeName: {
    type: String,
    required: true
  }
})

const C_name = computed(() => props.routeName === 'index' ? 'home' : props.routeName)

</script>

<template>
  <!-- <main id='loading' class='w-full h-full bg-black fixed top-0 left-0 z-50 cursor-wait select-none'> -->
  <main id='loading' class='w-full h-full bg-black overflow-hidden fixed top-0 left-0 z-50 cursor-wait select-none translate-y-0'>
    <BaseWrapper class="flex items-center justify-center">
      <h1 class="capitalize text-5xl md:text-7xl text-white translate-y-[30px] opacity-0">
        {{ C_name }}</h1>
    </BaseWrapper>
  </main>
</template>