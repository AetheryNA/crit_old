import Layout from '../src/components/Layout'
import '../public/styles/styles.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />  
    </Layout>
  )
}

export default MyApp
