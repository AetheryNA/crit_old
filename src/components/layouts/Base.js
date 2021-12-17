import { withRouter } from "next/router";
import Head from "next/head";
import Aside from "../AppAside";
import Header from "../AppHeader";
import { pageTitle } from "../../helpers/setPageTitle";

const LayoutBase = ({ children, router }) => {
  return (
    <>
      <Head>
        <title> CRIT | {pageTitle(router)} </title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <div className="main-content">
        <Aside />

        <main className="container main">
          <Header />
          <main className="inner-dashboard">{children}</main>
        </main>
      </div>
    </>
  );
};

export default withRouter(LayoutBase);
