// https://nuxt.com/docs/api/configuration/nuxt-config
import vue from "@vitejs/plugin-vue"
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }
      ],
    }
  },

  modules: [
    "@nuxt/icon",
    "@vueuse/nuxt",
    "@nuxtjs/google-fonts", '@pinia/nuxt', "@nuxt/image", "@nuxt/ui", "notivue/nuxt", "nuxt-aos", "nuxt-mail"],
  mail: {
    message: {
      to: 'ahmed.booley@gmail.com',
    },
    smtp: {
      host: "https://tabrak-pi.vercel.app/",
      port: 587,
    },
  },
  // vueEmail: {
  //   autoImports: false,
  // },
  // nitro: {
  //   rollupConfig: {
  //     plugins: [vue()]
  //   }
  // },
  image: {
    // provider: "vercel"
  },

  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Roboto: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    }
  },
  css: [
    'notivue/notification.css', // Only needed if using built-in notifications
    'notivue/animations.css' // Only needed if using built-in animations
  ],

  notivue: {
    limit: 2,
    avoidDuplicates: true
  },
  colorMode: {
    preference: "light",
    fallback: "light"
  },
  icon: {
    componentName: "NuxtIcon"
  }
})