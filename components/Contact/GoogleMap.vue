<template>
 <!-- <div class="google-map"> -->
 <!-- width="600"
  height="450" -->
 <iframe class="w-full h-full" :src="iframeSrc" style="border:0;" allowfullscreen loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"></iframe>
 <!-- </div> -->
</template>

<script setup>
const iframeSrc = 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3455.7364026492137!2d31.209225075383593!3d29.987004621290286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU5JzEzLjIiTiAzMcKwMTInNDIuNSJF!5e0!3m2!1sen!2seg!4v1721781988444!5m2!1sen!2seg';
</script>

<style scoped>
.google-map {
 margin: 0 auto;
 max-width: 100%;
}
</style>
