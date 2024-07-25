// https://nuxt.com/docs/api/configuration/nuxt-config
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

  modules: [// "@nuxtjs/tailwindcss",
  // "shadcn-nuxt",
  "@nuxt/icon", "@vueuse/nuxt", // "@nuxt/ui"
  "@nuxtjs/google-fonts", // "@nuxt/ui",
  '@pinia/nuxt', "@nuxt/image", "@nuxt/ui", "notivue/nuxt", "nuxt-aos"],


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
  }
})