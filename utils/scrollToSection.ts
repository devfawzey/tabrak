
// export default function (target: string | number = 400, delay = 0, offsetY: number = 100) {
export default function ({ target = 0, delay = 0, offsetY = 0 }) {
 const { $gsap } = useNuxtApp() as any
 const ease = [0.85, 0, 0.15, 1]//[.22,.68,0,1.71]//[.51,.92,.24,1.15]//[0.47, 0, 0.23, 1.38]//[0.785, 0.135, 0.15, 0.86]
 // await new Promise((resolve) => {
 $gsap.to(window, { duration: 1, scrollTo: { y: target, offsetY }, delay, ease: "Power4.easeInOut" })
 // })
}