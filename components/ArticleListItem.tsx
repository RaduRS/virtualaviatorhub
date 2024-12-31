import Link from "next/link";
import type { ArticleItem } from "@/types";

interface Props {
  articles: ArticleItem[];
}

const ArticleItemList = ({ articles }: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2.5 font-cormorantGaramond  text-2xl">
        {articles.map((article, id) => (
          <Link
            href={`/${article.id}`}
            key={id}
            className="text-neutral-900 hover:text-amber-700 transition duration-150"
          >
            {article.title}
            <h2 className="font-poppins text-lg">{article.chapter}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticleItemList;
