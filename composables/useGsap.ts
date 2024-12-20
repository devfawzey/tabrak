import { gsap } from "gsap"
export default function useGsap() {
 const tl = gsap.timeline()
 const loadingScreenDuration = 1.2 //in_1.2 leave 1
 const loadinScreenEase = "Expo.easeInOut"

 const imgZoomInWhileScroll = () => {
  // must run only in homePage
  if (!process.client || !document) return;
  // check if window innerwidth is bigger than 768px
  if (!window.matchMedia("(min-width: 769px)").matches) return;
  const landingSection = document.querySelector('section#landing') as HTMLElement

  // if scroll less than landing section img can be zoomed,else do nothing
  if (scrollY >= landingSection.offsetHeight || !landingSection?.offsetHeight) return;
  const landingImg = document.querySelector("section#landing .landing__img") as HTMLElement

  // lets zoom in
  landingImg.style.width = `${100 + scrollY / 5}%`
  // landingImg.style.scale = `${1 + scrollY / 528}`

 }

 const pageTransitionLeave = async () => {
  //targets 
  await new Promise((resolve) => {

   const loader = "#loading"
   const loaderText = '#loading h1'

   // sets
   tl.set("html", {
    cursor: "wait"
   })


   tl.to(loader, {
    top: 0,
    duration: loadingScreenDuration,
    ease: loadinScreenEase,
    onComplete() {
     resolve('navigate to the next route') // can navigate to the next route
    }
    // TODO u can remove -1
   })
   tl.to(loaderText, {
    opacity: 1,
    y: 0,
    duration: loadingScreenDuration - .7, //.8
    ease: "Power4.easeOut",
    delay: .05,
   }, "=-.4")
  })

 }

 // TODO
 const pageTransitionEnter = () => {
  //targets 
  const loader = "#loading"
  const loaderText = '#loading h1'
  const landingImg = "section#landing .landing__img"
  const onceIn = `[once-in]`

  tl.to(loaderText, {
   opacity: 1,
   y: 0,
   duration: loadingScreenDuration - .6, //.8
   ease: "Power3.easeInOut",
  }) //1.2

  tl.to(loader, {
   top: "-100%",
   duration: loadingScreenDuration, // 1
   ease: loadinScreenEase,
  }) // 1

  tl.to(loaderText, {
   opacity: 0,
   duration: loadingScreenDuration - .9, //.6
   ease: "linear"
  }, "=-1")


  tl.to(landingImg, {
   scale: 1,
   duration: loadingScreenDuration, //
   ease: loadinScreenEase,
  }, "=-1.1")
  if (document.querySelector(onceIn)) {
   tl.to(onceIn, {
    y: "0vh",
    opacity: 1,
    duration: 1,
    stagger: .05,
    ease: "Expo.easeOut",
   }, "=-.8")
  }

  tl.set("html", {
   cursor: "auto",
  }, "=-.6")

  // sets
  tl.set(loader, {
   top: "100%",
  })
  tl.set(loaderText, {
   opacity: 0,
   y: 0,
  })
 }


 const animateNavigation = (isNavActive: boolean) => {
  const target = "nav#nav"
  tl.to(target, {
   y: isNavActive ? 0 : '-150%',
   duration: 1,
   ease: "Expo.easeInOut"
  })

 }

 const animateScrollToTopBtn = (show: boolean = false) => {
  gsap.to('#scroll-to-top-btn', {
   scale: show ? 1 : 0,
   duration: .5,
   ease: "Power4.easeInOut"
  })
 }
 const toggleNavigationMenu = (show: boolean = false) => {
  tl.to('nav#nav', {
   y: show ? 0 : '100%',
   duration: loadingScreenDuration - .4,
   ease: loadinScreenEase
  })
  tl.to('.overlay-system', {
   opacity: show ? 1 : 0,
   duration: loadingScreenDuration - .4,
   ease: loadinScreenEase
  }, "<")
 }
 const animateBoxOnScroll = () => {
  const onceScroll = 'main#home .box-wrapper [once-scroll]'
  const containers = gsap.utils.toArray("main#home .box-wrapper")
  containers.forEach((container: any, index: number) => {
   const isRight = index % 2 !== 0 // yes
   gsap.set(`main#home .box-wrapper[data-box-index='${index}'] [once-scroll]`, {
    opacity: 0, x: isRight ? 200 : -200
   })
   const isZeroSection = index === 0
   const Utl = gsap.timeline({
    scrollTrigger: {
     trigger: container,
     // markers: true,
     toggleActions: "play none none reverse",
     start: "top 60%",
     end: isZeroSection ? 'center 90%' : "center 75%",
     scrub: 1,
     ease: loadinScreenEase,//"none",//"Power1.easeInOut",//loadinScreenEase,//
     // delay: 0.3,
     once: true,
    },
   })
   Utl.to(`main#home .box-wrapper[data-box-index='${index}'] [once-scroll]`, {
    x: 0,
    duration: 3,
    stagger: 0.02,
    opacity: 1
   })
   // gsap.to('[once-scroll]', {


   // })

  })
 }

 return { imgZoomInWhileScroll, animateBoxOnScroll, toggleNavigationMenu, animateScrollToTopBtn, pageTransitionEnter, animateNavigation, pageTransitionLeave }
}