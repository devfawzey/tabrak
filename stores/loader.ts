// import { defineStore } from 'pinia'

// export const useMyLoaderStore = defineStore({
//   id: 'myLoaderStore',
//   state: () => ({ }),
//   actions: {}
// })

export const useLoaderStore = defineStore('loader', () => {
  const canLoad = ref(false)
  const setCanLoad = (value: boolean) => canLoad.value = value
  return { canLoad, setCanLoad }
})