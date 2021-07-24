import { withRouter } from 'next/router'
import Head from 'next/head'
import Aside from '../Aside'
import Header from '../Header'
import { pageTitle } from '../../helpers/setPageTitle'

const LayoutBase = ({ children, router }) => {
  return (
    <>
      <Head>
        <title> CRIT | { pageTitle(router) } </title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <div className="main-content">
        <Aside />
        
        <main className="container main">
          <Header />
          { children }
        </main>
      </div>
    </>
  )
}

export default withRouter(LayoutBase)
