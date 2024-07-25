
<script setup>
// import "~/tailwind.config.js"
</script>
<template>
  <main id='contact-form' class="py-36">
    <BaseWrapper class="grid mx-auto grid-cols-1 max-w-3xl lg:max-w-6xl lg:grid-cols-7 gap-12">
      <div class="contact__info col-span-1 lg:col-span-4">
        <div class="main-header text-[#111] dark:text-white">contact</div>
        <div class="sub-header">Let's start new project.</div>
        <p class="mt-3 text-header">
          Now, as you were able to get a picture of who we are, it is up to you to contact us and lay the foundation for a
          new
          and successful business relationship. Our team consists
        </p>
        <!-- TODO and this one -->
        <hr class="bg-black/20 my-8" />
        <div class="grid gap-8 grid-cols-2  md:grid-cols-3  text-center text-black dark:text-white">
          <div class="phone col-span-2 sm:col-span-1 md:col-span-1">
            <div class="main-header font-medium text-[10px]">phone</div>
            <p class="text-header mb-3 text-xs">
              +45 (0)4 79 25 37 98
            </p>
            <p class="text-header text-xs">
              +45 (0)4 79 25 37 98
            </p>
          </div>
          <div class="email col-span-2 sm:col-span-1 md:col-span-1">
            <div class="main-header font-medium text-[10px] ">email</div>
            <p class="text-header mb-3 text-xs">
              prague@info.com
            </p>
            <p class="text-header text-xs">
              prague_arh@gmail.com
            </p>
          </div>
          <div class="skype col-span-2 md:col-span-1">
            <div class="main-header font-medium text-[10px] ">skype</div>
            <p class="text-header mb-3 text-xs">
              prague_support_1
            </p>
            <p class="text-header text-xs">
              prague_support_2
            </p>
          </div>
        </div>
      </div>
      <div class="form__wrapper col-span-1 lg:col-span-3 contact__form">
        <ContactFormInputs />
        <!-- v-form -->
        <!-- <v-sheet class="mx-auto" width="300"> -->

        <!-- </v-sheet> -->
      </div>
    </BaseWrapper>
  </main>
</template>
