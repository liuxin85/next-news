import { useRouter } from "next/router";
import styles from "../../styles/Feed.module.css";
import { Toolbar } from "../../components/toolbar";

export const Feed = ({ pageNumber, articles }) => {
  return <>Hello World</>;
};

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  console.log(pageNumber);
  console.log(`${process.env.NEXT_PUBLIC_NEWS_KEY}`);

  await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );
};

export default Feed;
