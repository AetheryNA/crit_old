import { withRouter } from 'next/router'
import { useEffect } from 'react'
import Head from 'next/head'
import Navigation from '../Navigation'
import Banner from '../Banner'

const LayoutBase = ({ children, router }) => {
  const currentURL = router.pathname
  const pageURL = currentURL.replace(/\//g, "") + "-page"
  const routeTitle = currentURL.replace(/\//g, "")

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  } 
  
  useEffect(() => {
    document.querySelector("body").classList.add(pageURL)
  })

  return (
    <>
      <Head>
        <title> CRIT | { capitalizeFirstLetter(routeTitle) } </title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <div className="main-content">
        <Navigation />
        
        <main className="container main">
          <Banner />
          { children }
        </main>
      </div>
    </>
  )
}

export default withRouter(LayoutBase)
