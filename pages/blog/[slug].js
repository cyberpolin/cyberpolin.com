import getMdContent from "../../lib/api";
import styles from "../../styles/Slug.module.sass";

const randomImage = () => {
  const randomIndex = [1, 2, 3, 4, 5][Math.floor(Math.random() * 5)];
  return `https://res.cloudinary.com/kondosoft-com/image/upload/v1659903360/cyberpolin.com/${randomIndex}.png`;
};

const Slug = (props) => {
  return (
    <>
      <div className={`${styles.Title} hero`}>
        {props?.md?.data?.title && <h2>{props?.md?.data?.title}</h2>}
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: props?.md?.content || "loading" }}
      />
      <style jsx>
        {`
          .hero {
            background: no-repeat center
              url(${props?.md?.data?.main_image
                ? props?.md?.data?.main_image
                : randomImage()});
            background-size: cover;
          }
        `}
      </style>
    </>
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
