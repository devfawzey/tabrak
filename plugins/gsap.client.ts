import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { CSSPlugin } from "gsap/CSSPlugin"
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CSSPlugin)

export default defineNuxtPlugin((nuxtApp) => {
 nuxtApp.provide("gsap", gsap)
})