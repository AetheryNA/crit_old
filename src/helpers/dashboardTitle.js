const dashboardHeaderTitle = (router) => {
  const currentURL = router.pathname
  const pageURL = currentURL.replace(/\//g, "")
  const title = pageURL.replace(/-/g, ' ')

  return title
}

export default dashboardHeaderTitle 
