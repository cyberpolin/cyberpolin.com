import Link from "next/link";
import styled from "styled-components";
import getMdContent, { getPosts } from "../../lib/api";

const randomImage = () => {
  const randomIndex = [1, 2, 3, 4, 5][Math.floor(Math.random() * 5)];
  return `https://res.cloudinary.com/kondosoft-com/image/upload/v1659903360/cyberpolin.com/${randomIndex}.png`;
};

const getSlug = (a) => {
  return a.replace(/\[\d\]-/, "").replace(/.md/, "");
};

const getReadable = (a) => {
  return getSlug(a).replace("-", " ");
};

const BlogList = ({ articles, md }) => (
  <>
    <Content>
      {md?.map(({ data, content }, i) => (
        <Article key={i}>
          <Link href={`blog/${getSlug(data.file)}`}>
            <Image img={data.main_image ? data.main_image : randomImage()}>
              <Title>{data.title}</Title>
            </Image>
          </Link>
        </Article>
      ))}
    </Content>
  </>
);

export const getStaticProps = async () => {
  const articleList = getPosts();
  const allArticles = getMdContent(articleList, true);

  return { props: { articles: articleList, md: allArticles } };
};

export default BlogList;

const Content = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`;

const Article = styled.li`
  flex: 1;
  flex-basis: 30%;
  margin: 1em;
`;

const Image = styled.div`
  background: no-repeat center ${(props) => `url(${props.img})`};
  border-radius: 10px;
  height: 250px;
  border: 1px solid #33333333;
  flex-direction: row reverse;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Title = styled.h3`
  font-weight: 600;
  min-height: 70px;
  width: 100%;
  padding: 10px 0;
  margin-bottom: 0;
  text-align: center;
  background-color: #00000055;
  color: #ffffff;
`;