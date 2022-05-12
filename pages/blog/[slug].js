// https://raw.githubusercontent.com/cyberpolin/cyberpolinPosts/main/%23%20Administrando%20varias%20versiones%20de%20Node%20al%20mismo

import remark from "remark";
import html from "remark-html";
import { useRouter } from "next/router";

const getHTML = async (markdown) => {
  const result = await remark().use(html).process(markdown);
  return result.toString();
};

const Slug = () => {
  const {
    query: { slug },
  } = useRouter();
  return <div>{slug}</div>;
};

export default Slug