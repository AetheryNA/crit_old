import { useEffect } from 'react'

export const pageTitle = (router) => {
  const currentURL = router.pathname
  const pageURL = currentURL.replace(/\//g, "") + "-page"
  const routeTitle = currentURL.replace(/\//g, "")

  useEffect(() => {
    document.querySelector("body").classList.add(pageURL)
  })

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return capitalizeFirstLetter(routeTitle)
}
