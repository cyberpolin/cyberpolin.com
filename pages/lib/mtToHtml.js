import { remark } from "remark";
import remarkHtml from "remark-html";

const mdToHtml = async (md) => {
  const result = await remark().use(remarkHtml).process(md);
  return result.toString();
};

export default mdToHtml;
