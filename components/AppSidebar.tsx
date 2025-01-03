"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { articlesMetadata } from "@/metadata";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useMemo } from "react";

type ArticleWithPath = {
  title: string;
  chapter: string;
  path: string;
  isLive: boolean;
};

export function AppSidebar() {
  const pathname = usePathname();

  // State to track expanded/collapsed state of each chapter
  const [expandedChapters, setExpandedChapters] = useState<
    Record<string, boolean>
  >({});

  // Initialize state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem("expandedChapters");
    if (savedState) {
      setExpandedChapters(JSON.parse(savedState));
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("expandedChapters", JSON.stringify(expandedChapters));
  }, [expandedChapters]);

  // Group articles by chapter
  const groupedArticles = useMemo(() => {
    return Object.entries(articlesMetadata).reduce((acc, [key, article]) => {
      if (!acc[article.chapter]) {
        acc[article.chapter] = [];
      }
      acc[article.chapter].push({ ...article, path: key } as ArticleWithPath);
      return acc;
    }, {} as Record<string, ArticleWithPath[]>);
  }, []);

  const toggleChapter = (chapter: string, open?: boolean) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapter]: open !== undefined ? open : !prev[chapter], // Use `open` if provided
    }));
  };

  return (
    <Sidebar>
      <SidebarContent>
        {Object.entries(groupedArticles).map(([chapter, articles], index) => {
          const mainChapter = articles.find(
            (article) => article.title === chapter
          );
          const isExpanded = expandedChapters[chapter] || false;

          return (
            <Collapsible
              key={chapter}
              className="group/collapsible"
              open={isExpanded} // Set initial state from `expandedChapters`
              onOpenChange={(open) => toggleChapter(chapter, open)} // Pass `open` to set state explicitly
            >
              <SidebarGroup>
                <SidebarGroupLabel asChild>
                  <CollapsibleTrigger className="flex items-center w-full">
                    {mainChapter ? (
                      <Link
                        href={mainChapter.isLive ? `/${mainChapter.path}` : "#"}
                        className={`text-base p-2 w-full text-left ${
                          mainChapter.isLive
                            ? "text-gray-800 font-bold hover:underline"
                            : "text-gray-400 cursor-not-allowed"
                        } ${
                          pathname === `/${mainChapter.path}` &&
                          mainChapter.isLive
                            ? "bg-gray-200 rounded-md"
                            : ""
                        }`}
                      >
                        {index + 1}. {chapter}
                      </Link>
                    ) : (
                      <span className="text-gray-400">
                        {index + 1}. {chapter}
                      </span>
                    )}
                    <ChevronDown className="ml-2 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>

                <CollapsibleContent>
                  <SidebarGroupContent>
                    <ul>
                      {articles
                        .filter((article) => article.title !== chapter)
                        .map((article) => (
                          <li key={article.path} className="py-1 pl-4">
                            <Link
                              href={article.isLive ? `/${article.path}` : "#"}
                              className={`block rounded-md px-2 py-1 ${
                                article.isLive
                                  ? "hover:bg-gray-200 text-gray-800"
                                  : "text-gray-400 cursor-not-allowed"
                              } ${
                                pathname === `/${article.path}` &&
                                article.isLive
                                  ? "bg-gray-200 font-semibold"
                                  : ""
                              }`}
                            >
                              {article.title}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
}
