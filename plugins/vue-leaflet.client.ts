export default defineNuxtPlugin(async (nuxtApp) => {
  const { pageTransitionEnter } = useGsap()
  nuxtApp.hook("page:finish", () => {
    pageTransitionEnter()

  })


});
