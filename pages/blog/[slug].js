// https://raw.githubusercontent.com/cyberpolin/cyberpolinPosts/main/%23%20Administrando%20varias%20versiones%20de%20Node%20al%20mismo

import getMdContent from "../../lib/api";

const Slug = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props?.md?.content || "loading" }}
    />
  );
};

export const getStaticProps = async ({ params: { slug } }) => {
  const md = getMdContent([`${slug}.md`], true);
  return {
    props: {
      md: md[0],
    },
  };
};

export const getStaticPaths = async (props) => {
  return {
    paths: [
      // String variant:
      "/blog/next-markdown-implementation",
    ],
    fallback: true,
  };
};

export default Slug;
