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
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useMemo } from "react";

type ArticleWithPath = {
  title: string;
  chapter: string;
  mainChapter: string;
  path: string;
  isLive: boolean;
};

export function AppSidebar() {
  const pathname = usePathname();

  const [groupedArticles, setGroupedArticles] = useState<
    Record<string, ArticleWithPath[]>
  >({});
  const [expandedChapters, setExpandedChapters] = useState<
    Record<string, boolean>
  >(() => {
    // Initialize from localStorage
    if (typeof window !== "undefined") {
      const savedState = localStorage.getItem("expandedChapters");
      return savedState ? JSON.parse(savedState) : {};
    }
    return {};
  });
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/api/articles");
        const data: Record<string, ArticleWithPath[]> = await response.json();

        // Sort the chapters numerically by their keys
        const sortedData = Object.entries(data).sort(([keyA], [keyB]) => {
          const parseKey = (key: string) =>
            key.match(/^\d+(\.\d+)?/)
              ? parseFloat(key.match(/^\d+(\.\d+)?/)![0])
              : Number.MAX_SAFE_INTEGER;

          return parseKey(keyA) - parseKey(keyB);
        });

        setGroupedArticles(Object.fromEntries(sortedData));
      } catch (error) {
        console.error("Failed to fetch articles:", error);
        setFetchError(true); // Set error state
      }
    };

    fetchArticles();
  }, []);

  const sortedGroupedArticles = useMemo(() => {
    return Object.entries(groupedArticles)
      .sort(([keyA], [keyB]) => {
        const parseKey = (key: string) =>
          key.match(/^\d+(\.\d+)?/)
            ? parseFloat(key.match(/^\d+(\.\d+)?/)![0])
            : Number.MAX_SAFE_INTEGER;

        return parseKey(keyA) - parseKey(keyB);
      })
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {} as Record<string, ArticleWithPath[]>);
  }, [groupedArticles]);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("expandedChapters", JSON.stringify(expandedChapters));
  }, [expandedChapters]);

  const toggleChapter = (chapter: string, open?: boolean) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapter]: open !== undefined ? open : !prev[chapter], // Use `open` if provided
    }));
  };

  if (fetchError) {
    return <div>Error fetching articles. Please try again later.</div>;
  }
  return (
    <Sidebar>
      <SidebarContent>
        {Object.entries(sortedGroupedArticles).map(([chapter, articles]) => {
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
                  <CollapsibleTrigger className="flex items-center w-full pl-0">
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
                        {chapter}
                      </Link>
                    ) : (
                      <span className="text-gray-400">{chapter}</span>
                    )}
                    <ChevronDown className="ml-2 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>

                <CollapsibleContent>
                  <SidebarGroupContent>
                    <ul>
                      {articles
                        .filter((article) => article.title !== chapter)
                        .map((article, index) => (
                          <li
                            key={`${article.path}-${index}`}
                            className="py-1 pl-2"
                          >
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
