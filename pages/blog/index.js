import Link from "next/link";
import { getPosts } from "../lib/api";

const getSlug = (a) => {
  return a.replace(/\[\d\]-/, "").replace(/.md/, "");
};

const BlogList = ({ articles }) => (
  <>
    <h1>I am me</h1>
    <ul>
      {articles?.map((a) => (
        <li>
          <p>{getSlug(a)}</p>
          <Link href={`blog/${getSlug(a)}`}>a</Link>
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
