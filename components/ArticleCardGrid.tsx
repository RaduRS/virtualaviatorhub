import React from "react";
import ArticleCard from "./ArticleCard";
import type { ArticleItem } from "@/types";

interface ArticleCardGridProps {
  articles: Record<string, ArticleItem[]>;
}

const ArticleCardGrid: React.FC<ArticleCardGridProps> = ({ articles }) => {
  const liveArticles = Object.values(articles)
    .flat()
    .filter((article) => article.isLive);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-2">
      {liveArticles.map((article) => (
        <ArticleCard
          key={article.id}
          image={article.image}
          title={article.title}
          chapter={article.chapter}
          url={`/${article.id}`}
          content={article.content}
        />
      ))}
    </section>
  );
};

export default ArticleCardGrid;
