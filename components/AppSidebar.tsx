"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { articlesMetadata } from "@/metadata";
import { usePathname } from "next/navigation"; // Use next/navigation instead

// Define a type that includes the dynamically added `path` property
type ArticleWithPath = {
  title: string;
  chapter: string;
  path: string;
};

export function AppSidebar() {
  const pathname = usePathname(); // Get the current path

  // Group articles by chapter
  const groupedArticles = Object.entries(articlesMetadata).reduce(
    (acc, [key, article]) => {
      if (!acc[article.chapter]) {
        acc[article.chapter] = [];
      }
      acc[article.chapter].push({ ...article, path: key } as ArticleWithPath);
      return acc;
    },
    {} as Record<string, ArticleWithPath[]>
  );

  return (
    <Sidebar>
      <SidebarContent>
        {Object.entries(groupedArticles).map(([chapter, articles], index) => {
          const mainChapter = articles.find(
            (article) => article.title === chapter
          );

          return (
            <SidebarGroup key={chapter} className="h-auto">
              {/* Main chapter link */}
              {mainChapter && (
                <SidebarGroupLabel className="h-auto px-0">
                  <a
                    href={`/${mainChapter.path}`}
                    className={`text-gray-800 font-bold hover:underline text-base p-2 w-full ${
                      pathname === `/${mainChapter.path}`
                        ? "bg-gray-200 rounded-md"
                        : ""
                    }`}
                  >
                    {index + 1}. {chapter}
                  </a>
                </SidebarGroupLabel>
              )}

              {/* Subtopics */}
              <SidebarGroupContent>
                <ul>
                  {articles
                    .filter((article) => article.title !== chapter)
                    .map((article) => (
                      <li key={article.path} className="py-1">
                        <a
                          href={`/${article.path}`}
                          className={`block rounded-md pl-6 pr-2 py-1 hover:bg-gray-200 hover:text-gray-800 ${
                            pathname === `/${article.path}`
                              ? "bg-gray-200 font-bold"
                              : "text-gray-600"
                          }`}
                        >
                          {article.title}
                        </a>
                      </li>
                    ))}
                </ul>
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
}
