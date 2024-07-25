export default defineAppConfig({
 ui: {
  strategy: "override",
  primary: "concrete",
  colors: ["jade"],
  button: {
   rounded: "rounded-md",
   // font: "font-extrabold",
   // default: {
   //  size: "xl",
   //  variant: "outline",
   //  loadingIcon: "i-carbon-account",
   // },
  },
  icons: {
   dynamic: true
  },
  input: {
   placeholder: "placeholder-gray-500 dark:placeholder-white/50 text-xs",
   size: {
    xl: "w-full h-14"
   },
   color: {
    gray: {
     outline: "bg-concrete-100 dark:bg-accent focus:ring-gray-300"
    }
   }
  },
  textarea: {
   placeholder: "placeholder-gray-500 dark:placeholder-white/50 text-xs",
   color: {
    gray: {
     outline: "bg-concrete-100 dark:bg-accent focus:ring-gray-300"
    }
   }
  }
 },
});