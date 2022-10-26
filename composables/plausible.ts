export const usePlausible: any = () => {
  const nuxtApp = useNuxtApp()
  return nuxtApp.$plausible
}
