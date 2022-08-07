import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { micromark } from "micromark";

const portfolioDirectory = join(process.cwd(), "pages/portfolio");

export function getPortfolio() {
  return fs.readdirSync(portfolioDirectory);
}

export function getMdContent(files) {
  function getObject(file) {
    const content = fs.readFileSync(`${portfolioDirectory}/${file}`, "utf8");
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
