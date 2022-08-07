import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { micromark } from "micromark";

const portfolioDirectory = join(process.cwd(), "pages/portfolio");
const blogDirectory = join(process.cwd(), "pages/blog/docs");

export function getPortfolio() {
  return fs.readdirSync(portfolioDirectory);
}

export function getPosts() {
  return fs.readdirSync(blogDirectory);
}

export default function getMdContent(files, blog = false) {
  function getObject(file) {
    const content = fs.readFileSync(
      `${blog ? blogDirectory : portfolioDirectory}/${file}`,
      "utf8"
    );
    const mdObject = matter(content);

    return {
      data: mdObject.data,
      content: micromark(mdObject.content),
    };
  }

  const array = files.map((f) => {
    return getObject(f);
  });

  return array;
}
