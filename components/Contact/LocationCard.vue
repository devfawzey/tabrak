<script setup lang='ts'>

defineProps({
 item: {
  type: Object,
  default: {
   list: [
    "Lítačka 35/29", "06589 Nové Město", "Czech Republic"
   ]
  }
 }
})

</script>

<template>
 <UCard class="aspect-[320/301] relative bg-concrete-100 rounded-sm overflow-hidden group cursor-pointer flex items-center dark:bg-transparent dark:ring-accent dark:rounded-md max-w-sm mx-auto w-full">
  <div
   class="bg-contact-img scale-125 group-hover:scale-100 duration-500 group-hover:opacity-100 lg:opacity-0 absolute top-0 left-0 w-full h-full transition-all bg-[url('/contact/location-1.jpg')] bg-cover bg-center before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black/50" />
  <div class="card__content w-full h-full relative group-hover:text-white [&>*]:transition-colors text-white lg:text-black/90 dark:text-white">
   <hr class="w-[50%] border-white lg:border-black/80 dark:border-white group-hover:border-white/80" />
   <div class="text-[10px] uppercase my-8  tracking-widest">evo grand hall</div>
   <ul class="lg:text-gray-600 dark:text-white/90 space-y-3 group-hover:text-white/95 text-sm sm:text-base">
    <li v-for="sub in item.list">{{ sub }}</li>
   </ul>
  </div>
 </UCard>
</template>