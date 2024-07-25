export default function ({ path, scrollTarget }: { path: string, scrollTarget: string }) {
 // route = "/ | /about"
 const route = useRoute()
 let delay = 0;
 // if path different let delay 1.8
 if (route.path !== path) {
  delay = 1.8
 }
 const router = useRouter()
 router.push({ path }).then(() => {
  scrollToSection(scrollTarget, delay)
 })
 return ''
}