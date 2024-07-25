export const useScrollSection = defineStore('scroll-section', () => {
 const currentSection = ref(0);
 const setSection = (value: number) => currentSection.value = value
 return { currentSection, setSection }
})