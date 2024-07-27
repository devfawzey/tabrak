<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const isBtnLoading = ref(false)
const phoneRegex = new RegExp(
 /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
);

const schema = z.object({
 name: z.string().min(8, 'Must be at least 8 characters'),
 phoneNumber: z.string().regex(phoneRegex, "Invalid PhoneNumber"),
 email: z.string().email('Invalid email'),
 message: z.string().min(10, 'must be at least 10 characters').max(300, 'you reached maxmium characters'),
})

type Schema = z.output<typeof schema>

const state = reactive({
 name: undefined,
 phoneNumber: undefined,
 email: undefined,
 message: undefined
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
 isBtnLoading.value = true
 setTimeout(() => {
  isBtnLoading.value = false
  state.name = undefined
  state.phoneNumber = undefined
  state.email = undefined
  state.message = undefined
  // Do something with data
  push.success("Message has been send");

 }, 2000)
}
</script>

<template>
 <UForm :validate-on="['submit', 'change', 'input']" :schema="schema" :state="state" @submit="onSubmit">
  <div class="form__content grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
   <!--  -->
   <UFormGroup name="name">
    <UInput autocomplete="given-name" variant="outline" color="gray" size="xl" v-model="state.name" placeholder="Name"
     type="text" />
   </UFormGroup>
   <!--  -->
   <UFormGroup name="phoneNumber">
    <UInput autocomplete="given-name" color="gray" size="xl" v-model="state.phoneNumber" placeholder="phonenumber" />
   </UFormGroup>
   <UFormGroup name="email" class="lg:col-span-2">
    <UInput autocomplete="given-name" color="gray" size="xl" v-model="state.email" placeholder="example@gmail.com" />
   </UFormGroup>
   <UFormGroup name="message" class="lg:col-span-2">
    <UTextarea a autocomplete="given-name" resize color="gray" :rows="6" size="xl" v-model="state.message"
     placeholder="Message" />
   </UFormGroup>
  </div>
  <UButton loading-icon="eos-icons:loading" :loading="isBtnLoading" padded type="submit" color="gray" variant="solid"
   class="float-right ring-gray-200 dark:disabled:text-white/50 dark:ring-gray-50 dark:bg-white dark:hover:bg-white/90 dark:text-black mt-4 px-8 shadow-none"
   size="md" trailing icon="i-system-uicons-arrow-right">
   <span class="mr-1">Submit</span>
  </UButton>
 </UForm>
</template>

