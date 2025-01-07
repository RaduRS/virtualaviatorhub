import fs from "fs";
import path from "path";
import matter from "gray-matter";
import moment from "moment";
import { remark } from "remark";
import html from "remark-html";

import type { ArticleItem } from "@/types";

const articlesDirectory = path.join(process.cwd(), "articles");

export const getArticleData = async (id: string) => {
  const fullPath = path.join(articlesDirectory, `${id}.md`); // Ensure id is valid
  if (!fs.existsSync(fullPath)) {
    throw new Error(`File not found: ${fullPath}`);
  }
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  const date = moment(matterResult.data.date, "DD-MM-YYYY").format(
    "DD-MM-YYYY"
  );
  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    mainChapter: matterResult.data.mainChapter,
    chapter: matterResult.data.chapter,
    isLive: matterResult.data.isLive || false,
    image: matterResult.data.image,
    resources: matterResult.data.resources || [],
    content: matterResult.content || "",
    date,
  };
};

export const getAllArticlesMetadata = async () => {
  const fileNames = fs.readdirSync(articlesDirectory);

  // Fetch all article metadata
  const allArticlesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const matterResult = matter(fileContents);

    return {
      id,
      path: id,
      title: matterResult.data.title,
      mainChapter: matterResult.data.mainChapter,
      chapter: matterResult.data.chapter,
      isLive: matterResult.data.isLive || false,
      image: matterResult.data.image,
      resources: matterResult.data.resources || [],
      content: matterResult.content || "",
      date: moment(matterResult.data.date, "DD-MM-YYYY").format("DD-MM-YYYY"),
    };
  });

  // Group by chapter for easier sidebar rendering
  return allArticlesData.reduce((acc, article) => {
    if (!acc[article.chapter]) {
      acc[article.chapter] = [];
    }
    acc[article.chapter].push(article);
    return acc;
  }, {} as Record<string, ArticleItem[]>);
};
