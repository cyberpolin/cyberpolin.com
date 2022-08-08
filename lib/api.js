import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { micromark } from "micromark";

const portfolioDirectory = join(process.cwd(), "pages/portfolio");
const blogDirectory = join(process.cwd(), "pages/blog/docs");

export function getPortfolio() {
  const res = fs
    .readdirSync(portfolioDirectory)
    .filter((file) => file.includes(".md"));
  return res;
}

export function getPosts() {
  return fs.readdirSync(blogDirectory).filter((file) => file.includes(".md"));
}

export default function getMdContent(files, blog = false) {
  function getObject(file) {
    const content = fs.readFileSync(
      `${blog ? blogDirectory : portfolioDirectory}/${file}`,
      "utf8"
    );
    const mdObject = matter(content);

    return {
      data: { ...mdObject.data, file: file },
      content: micromark(mdObject.content),
    };
  }

  const array = files.map((f) => {
    return getObject(f);
  });

  return array;
}
