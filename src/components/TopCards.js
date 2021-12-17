import Tag from "../../public/img/icons/tag.svg";
import Link from "next/link";

const TopCards = ({ trending }) => {
  const trendingList = trending.map((item, index) => {
    return (
      <Link href={`/post/${item.post_id}`} key={index}>
        <div className="top-cards__card">
          <div className="top-cards__card-profile">
            <a href="/" className="flex flex-row items-center">
              <img className="h-8 w-8" src={`/${item.author.avatar_url}`} />
              <p> {item.author.username} </p>
            </a>
          </div>
          <div className="top-cards__card-content">
            <p> {item.content} </p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="top-cards flex flex-col">
      <div className="top-cards__header relative">
        <div className="top-cards__header-title">
          <Tag />
          <h3> Top Trending </h3>
        </div>
      </div>

      {trendingList.splice(0, 2)}
    </div>
  );
};

export default TopCards;
