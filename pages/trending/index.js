import { withSessionSSR } from "../../lib/auth/session";
import InnerDashboardHeader from "../../src/components/InnerdashboardHeader";
import PostItem from "../../src/components/PostItem";

const index = ({ postItems, user }) => {
  return (
    <>
      <div className="dashboard-left">
        <InnerDashboardHeader iconTrending={true} />
        <PostItem postItems={postItems} user={user} />
      </div>
      <div className="dashboard-right"></div>
    </>
  );
};

export const getServerSideProps = withSessionSSR(async ({ req, res }) => {
  const user = req.session.get("user");

  const response = await fetch("http://localhost:3000/api/trending");
  const postItems = await response.json();

  return {
    props: {
      postItems,
      user,
    },
  };
});

export default index;
