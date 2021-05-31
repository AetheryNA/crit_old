import { withRouter } from 'next/router'
import { useEffect } from 'react'
import Head from 'next/head'

const Layout = ({ children, router }) => {
  const currentURL = router.pathname
  const pageURL = currentURL.replace(/\//g, "") + "page"
  
  useEffect(() => {
    document.querySelector("body").classList.add(pageURL)
  })

  return (
    <>
      <Head>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      {currentURL === "/login" || "/signup" ? false : <h1> Active </h1>}
      <main className="container">
        { children }
      </main>
    </>
  )
}

export default withRouter(Layout)
