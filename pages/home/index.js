import PostItem from "../../src/components/PostItem";
import InnerdashboardHeader from "../../src/components/InnerdashboardHeader";
import TopCards from "../../src/components/TopCards";
import HomeFriends from "../../src/components/HomeFriends";
import AdvertisementBlock from "../../src/components/AdvertisementBlock";
import { withSessionSSR } from "../../lib/auth/session";

const index = ({ getPosts, getAllFriends, trending, user }) => {
  return (
    <>
      <div className="dashboard-left">
        <InnerdashboardHeader title={"Recent Activity"} iconHome={true} />
        <PostItem postItems={getPosts} user={user} />
      </div>
      <div className="dashboard-right">
        <TopCards trending={trending} />

        <div className="dashboard-right__home-section">
          <InnerdashboardHeader title={"Your friends"} iconFriends={true} />
          {!getAllFriends.getFriends.length > 0 ? (
            <p> Couldn't find any friends, try adding a few? </p>
          ) : (
            <HomeFriends friends={getAllFriends.getFriends} />
          )}
        </div>

        <div className="dashboard-right__home-section">
          <InnerdashboardHeader title={"Advertisement"} />
          <AdvertisementBlock />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = withSessionSSR(async function ({ req, res }) {
  const user = req.session.get("user");

  if (!user) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  const [getAllPostsRes, getAllFriendsRes, trendingRes] = await Promise.all([
    fetch(
      `${process.env.BASE_URL}/api/getUserPosts?user_id=${user.id}&_limit=5`
    ),
    fetch(`${process.env.BASE_URL}/api/getFriends?user_id=${user.id}`),
    fetch(`${process.env.BASE_URL}/api/trending`),
  ]);

  const [getAllPosts, getAllFriends, trending] = await Promise.all([
    getAllPostsRes.json(),
    getAllFriendsRes.json(),
    trendingRes.json(),
  ]);

  const getPosts = getAllPosts.users[0].posts;

  return {
    props: {
      getPosts,
      getAllFriends,
      trending,
      user,
    },
  };
});

export default index;
