<script setup lang='ts'>

// defineProps({
//  box: {
//   type: Object as PropType<AboutBox>
//  }
// })
const props = defineProps<{
  box: AboutBox,
  index: number
}>()

const isBoxRight = computed(() => props.index % 2 !== 0) //yes

</script>

<template>
  <div :class="{ '!pt-16': index === 0 }" class="pt-24 box-wrapper" :data-box-index="index + 1"
    :data-section-index="index + 2">
    <!-- <BaseWrapper class="py-24"> -->
    <div class="grid grid-cols-1 md:grid-cols-7 gap-y-8 min-h-[420px]">
      <div :class="{ 'md:order-2': isBoxRight }" class="img__wrapper h-full md:col-span-4 relative">
        <NuxtImg data-aos="zoom-out-up" data-aos-duration="1200" data-aos-delay="300" data-wrapper format="webp"
          :src="`/about-us/box-${box.img}.jpg`" class="h-full max-h-[350px] sm:max-h-none max-w-full aspect-auto"
          sizes="640px, sm:695px, lg:622px" once-scroll fit="cover" />
      </div>
      <!-- content -->
      <!-- margin hr(w-1/2 + transaltex) -->
      <div :class="[isBoxRight ? 'text-right md:me-14 items-end' : 'items-start md:ms-14']" class=" content  flex flex-col justify-center gap-y-6
   col-span-3 md:pt-5" once-scroll>
        <!-- margin: hr(w-full + translate) -->
        <div data-aos="fade-down" data-aos-duration="1000" :class="[isBoxRight ? 'me-24' : 'ms-24']"
          class=" md:mx-0  project-date relative   text-xs flex items-center gap-4" once-scroll>
          <hr :class="[isBoxRight ? 'translate-x-4 left-full' : '-translate-x-4 right-full']"
            class="w-20 h-0 border-solid   top-1/2 -translate-y-1/2 border  absolute  border-black dark:border-white" />
          <span v-text="box.date" />
        </div>
        <!-- <div class="project-date-with-line absolute hidden md:flex text-xs py-8 items-center gap-4">
     <hr class="w-20 border-black" />
     <span v-text="box.date" />
    </div> -->
        <div class="sub-header my-0" v-text="box.content_header" once-scroll data-aos="fade-down" data-aos-duration="1000"
          data-aos-delay="100" />
        <p v-text="box.content_text" class="description my-0" once-scroll data-aos="fade-down" data-aos-duration="1000"
          data-aos-delay="300" />
        <!-- action -->
        <!-- trailing
     icon="i-system-uicons-arrow-right" -->
     <!-- TODO  add new Page for every single work-->
        <UButton v-if="false" once-scroll size="md" variant="solid" color="gray" label="READ"
          class="ring-1 text-xs u-hover px-8 w-[132px] flex items-center" data-aos="fade-down" data-aos-duration="1000"
          data-aos-delay="400">
          <span>READ</span>
          <BaseLongArrowRight color="bg-black/50 after:bg-black/50 before:bg-black/50" />
        </UButton>
      </div>
    </div>
    <!-- </BaseWrapper> -->
  </div>
</template>

<style>
/* .u-hover .icon {
 position: relative;
 transition: all 0.5s;
} */

.u-hover:hover #long-arrow-right {
  /* transform: translateX(10px); */
  width: 40px
}
</style>