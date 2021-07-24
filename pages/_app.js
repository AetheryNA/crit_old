import LayoutBase from '../src/components/layouts/Base'
import '../public/styles/styles.scss'

const MyApp = ({ Component, pageProps }) => {
  const Layout = Component.layout || LayoutBase

  return (
    <Layout>
      <Component {...pageProps} />  
    </Layout>
  )
}

export default MyApp
