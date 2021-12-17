import LayoutBase from "../src/components/layouts/Base";
import "tailwindcss/tailwind.css";
import "../public/styles/styles.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

const MyApp = ({ Component, pageProps }) => {
  const Layout = Component.layout || LayoutBase;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
