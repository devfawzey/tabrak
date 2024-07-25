<script setup lang="ts">
const { pageTransitionLeave, pageTransitionEnter } = useGsap()
import { outlinedIcons, slateTheme } from "notivue";
const nuxtApp = useNuxtApp()
const router = useRouter()
const route = useRoute()
const routeName = ref(route.name)

nuxtApp.hook("page:finish", pageTransitionEnter)

router.beforeEach(async (to, from, next) => {
  routeName.value = to.name as any
  await pageTransitionLeave()
  next()

})
</script>

<template>
  <NuxtLayout>
    <Notivue v-slot="item">
      <Notification :item="item" :icons="outlinedIcons" :theme="slateTheme" />
    </Notivue>
    <AppLoading :route-name="routeName" />
    <div data-scroll-container class="min-h-screen">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

