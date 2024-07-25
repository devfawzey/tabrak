import { isClient } from "@vueuse/core";
import LocomotiveScroll from "locomotive-scroll";
// import { isClient } from "@vueuse/core"

// TODO we can import $locomotive and return one value
export const initLocomotiveScroll = () => {
 // if (true) return;
 if (!process.client || !document && !isClient) return;

 const scrollContainer = document.querySelector("#scroll-container") as HTMLElement

 // check if exist
 if (!scrollContainer) return;

 //init loco 
 const scroll = new LocomotiveScroll({
  el: scrollContainer,
  smooth: true
 })

 // scroll.start()

 return scroll

}