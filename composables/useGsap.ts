import theGsap from "gsap"
export default function useGsap() {
 const loaderStore = useLoaderStore()
 const { $gsap } = useNuxtApp() as any
 const gsap = $gsap ?? theGsap
 const tl = gsap.timeline()
 const executeTransition = ref(false)

 const loadingScreenDuration = 1.2 //in_1.2 leave 1
 const loadinScreenEase = "Expo.easeInOut"

 const imgZoomInWhileScroll = () => {
  // must run only in homePage
  if (!process.client || !document) return;
  const landingSection = document.querySelector('section#landing') as HTMLElement

  // if scroll less than landing section img can be zoomed,else do nothing
  if (scrollY >= landingSection.offsetHeight || !landingSection?.offsetHeight) return;
  const landingImg = document.querySelector("section#landing .landing__img") as HTMLElement

  // lets zoom in
  // landingImg.style.width = `${100 + scrollY / 5}%`
  landingImg.style.scale = `${1 + scrollY / 528}`

 }

 const pageTransitionOnMount = async () => {

  // targets
  const loader = "#loading"
  const loaderText = '#loading h1'
  const landingImg = "section#landing .landing__img"
  const onceIn = '[once-in]'

  tl.set("html", {
   cursor: "wait"
  })

  await new Promise((resolve: any) => {

   // start animation
   tl.to(loaderText, {
    duration: loadingScreenDuration - .6, // 1
    y: 0,
    opacity: 1,
    ease: "Power4.easeOut",
   })

   tl.to(loader, {
    delay: 0.3, //.3
    top: '-100%',
    duration: loadingScreenDuration - .2, // 1
    ease: loadinScreenEase,
    onStart() {
     resolve('can zoom out')
    }
   })

   tl.to(loaderText, {
    duration: loadingScreenDuration - .6, // 1
    y: -50,
    opacity: 0,
    ease: "Power4.easeOut",
   }, "=-.8")

   tl.set("html", {
    cursor: "auto"
   }, "=-.6")

   // if (route.path === '/') {
   tl.fromTo(landingImg, { scale: 1.8 }, {
    scale: 1,
    // x: '-50%',
    // clearProps: "translateX",
    duration: loadingScreenDuration,
    ease: loadinScreenEase,
   }, "=-1")
   // }

   // check ifrst if onceIn element exist
   if (document.querySelector(onceIn)) {
    //aniamte once-in content  
    tl.to(onceIn, {
     y: "0vh",
     opacity: 1,
     duration: 1,
     stagger: .05,
     ease: "Expo.easeOut",
    }, "=-.8")
   }

   // sets
   tl.set("body", {
    overflow: "auto",
    padding: 0
   })
   tl.set(loader, {
    top: '100%',
   })
   tl.set(loaderText, {
    opacity: 0,
    y: 0,
   })

  })

 }

 const pageTransitionIn = async (routeName: string) => {
  // TODO newCHANGEScloseNavFirst
  const nav = "nav#nav"
  tl.to(nav, {
   y: '-150%',
   duration: loadingScreenDuration,
   ease: loadinScreenEase,
  })

  const C_routeName = routeName === 'index' ? 'home' : routeName

  //targets 
  const loader = "#loading"
  const loaderText = '#loading h1'
  const landingImg = "section#landing .landing__img"
  const onceIn = `main#${C_routeName} [once-in]`

  // sets
  tl.set("html", {
   cursor: "wait"
  })

  await new Promise((resolve: any) => {

   //duration + duration + .5 // .6 + .6 + .5 //1.7s

   tl.to(loader, {
    top: 0,
    duration: loadingScreenDuration,
    ease: loadinScreenEase,
    onComplete() {
     resolve('navigate to the next route') // can navigate to the next route
    }
    // TODO u can remove -1
   }, "=-1.35")
   tl.to(loaderText, {
    opacity: 1,
    y: 0,
    duration: loadingScreenDuration - .7, //.8
    ease: "Power4.easeOut",
    delay: .05,
    onComplete() {
     // next route now is mounted 
     // if (routeName === 'index') {
     tl.to(landingImg, {
      scale: 1,
      // x: '-50%',
      duration: loadingScreenDuration,
      ease: loadinScreenEase,
     }, "=-1.1")
     // }
     //aniamte once-in content  
     if (document.querySelector(onceIn)) {
      tl.to(onceIn, {
       y: "0vh",
       opacity: 1,
       duration: 1,
       stagger: .05,
       ease: "Expo.easeOut",
      }, "=-.8")
     }

    }
   }, "=-.4")

   // animate text inside loading

   tl.to(loader, {
    delay: 0.5, //.3
    top: "-100%",
    duration: loadingScreenDuration - .2, // 1
    ease: loadinScreenEase,
   })

   tl.to(loaderText, {
    duration: loadingScreenDuration - .6, // 1
    y: -50,
    opacity: 0,
    ease: "Power4.easeOut",
   }, "=-.8")


   tl.set("html", {
    cursor: "auto",
   }, "=-.6")

   tl.to(loaderText, {
    opacity: 0,
    duration: loadingScreenDuration - .9, //.6
    ease: "linear"
   }, "=-1")

   // tl.to(onceIn, {
   //  y: "0vh",
   //  opacity: 1,
   //  duration: 1,
   //  stagger: .05,
   //  ease: "Expo.easeOut",
   // }, "=-.8")

   // sets
   tl.set(loader, {
    top: "100%",
   })
   tl.set(loaderText, {
    opacity: 0,
    y: 0,
   })

  })
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
   tl.set("body", {
    overflow: "hidden",
    // paddingRight: "8px",
    // onComplete() {
    //  document.querySelector("header#header section.container")?.classList.add('!pe-10')
    // }
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
   duration: loadingScreenDuration,
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
  tl.set("body", {
   overflow: "auto",
   // padding: 0,
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
  gsap.to('nav#nav', {
   y: show ? 0 : '100%',
   duration: loadingScreenDuration,
   ease: loadinScreenEase
  })
 }
 const animateBoxOnScroll = () => {
  const onceScroll = 'main#home .box-wrapper [once-scroll]'
  const containers = gsap.utils.toArray("main#home .box-wrapper")
  containers.forEach((container: HTMLElement, index: number) => {
   // console.log({ containerIndex: container.dataset.boxIndex, container })
   // gsap.set(, {
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

 return { imgZoomInWhileScroll, animateBoxOnScroll, toggleNavigationMenu, animateScrollToTopBtn, pageTransitionOnMount, pageTransitionIn, pageTransitionEnter, animateNavigation, pageTransitionLeave }
}