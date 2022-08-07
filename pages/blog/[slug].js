// https://raw.githubusercontent.com/cyberpolin/cyberpolinPosts/main/%23%20Administrando%20varias%20versiones%20de%20Node%20al%20mismo

import getMdContent from "../lib/api";

const Slug = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props?.md?.content || "loading" }}
    />
  );
};

export const getStaticProps = async ({ params: { slug } }) => {
  // const {
  //   query: { slug },
  // } = useRouter();
  console.log("> ", slug);
  const md = getMdContent([`${slug}.md`], true);
  console.log(">> ", slug);
  // console.log(">> ", md);
  return {
    props: {
      md: md[0],
    },
  };
};

export const getStaticPaths = async (props) => {
  console.log("stati", props);
  return {
    paths: [
      // String variant:
      "/blog/first-post",
    ],
    fallback: true,
  };
};

export default Slug