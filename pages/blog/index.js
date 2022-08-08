import Link from "next/link";
import { getPosts } from "../../lib/api";

const getSlug = (a) => {
  return a.replace(/\[\d\]-/, "").replace(/.md/, "");
};

const getReadable = (a) => {
  return getSlug(a).replace("-", " ");
};

const BlogList = ({ articles }) => (
  <>
    <ul>
      {articles?.map((a, i) => (
        <li key={i}>
          <Link href={`blog/${getSlug(a)}`}>{getReadable(a)}</Link>
        </li>
      ))}
    </ul>
  </>
);

export const getStaticProps = async () => {
  const articleList = getPosts();
  return { props: { articles: articleList } };
};

export default BlogList;
