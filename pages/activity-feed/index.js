import { withSessionSSR } from "../../lib/auth/session";
import InnerdashboardHeader from "../../src/components/InnerdashboardHeader";
import PostItem from "../../src/components/PostItem";
import Head from "next/head";

const index = ({ postItems, user }) => {
  return (
    <>
      <Head>
        <title> CRIT | My Feed </title>
      </Head>

      <div className="dashboard-left">
        <InnerdashboardHeader iconActivity={true} />
        <PostItem postItems={postItems} user={user} />
      </div>
      <div className="dashboard-right dashboard-right--small"></div>
    </>
  );
};

export const getServerSideProps = withSessionSSR(async ({ req, res }) => {
  const user = req.session.get("user");

  const response = await fetch("http://localhost:3000/api/getAllPosts");
  const postItems = await response.json();

  return {
    props: {
      postItems,
      user,
    },
  };
});

export default index;
