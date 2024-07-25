<script setup lang='ts'>



</script>

<template>
 <main id='contact-loctions' class='py-36'>
  <BaseWrapper>
   <div class="main-header">locations</div>
   <div class="sub-header mb-20">Meet Us in your City.</div>
   <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3">
    <ContactLocationCard v-for="item in 3" />
   </div>
  </BaseWrapper>
 </main>
</template>