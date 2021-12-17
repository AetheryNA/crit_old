import { withRouter } from "next/router";
import Head from "next/head";
import { pageTitle } from "../../helpers/setPageTitle";

const LayoutAuth = ({ children, router }) => {
  return (
    <>
      <Head>
        <title> CRIT | {pageTitle(router)} </title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <main className="container">{children}</main>
    </>
  );
};

export default withRouter(LayoutAuth);
