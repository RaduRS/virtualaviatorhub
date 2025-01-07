"use client";
import React from "react";

import ArticleCardGrid from "@/components/ArticleCardGrid";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useSidebar } from "@/components/ui/sidebar";
import { ArticleItem } from "@/types";
import Loader from "@/components/Loader";
import SearchBox from "@/components/SearchBox";

const HomePage = () => {
  const [articles, setArticles] = useState<Record<string, ArticleItem[]>>({});
  const [filteredArticles, setFilteredArticles] = useState<
    Record<string, ArticleItem[]>
  >({});
  const [loading, setLoading] = useState(true);
  const { toggleSidebar } = useSidebar();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/api/articles");
        if (response.ok) {
          const data = await response.json();
          setArticles(data); // Articles is now an array
          setFilteredArticles(data);
        } else {
          console.error("Failed to fetch articles");
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const handleSearch = (query: string) => {
    if (query.trim() === "") {
      setFilteredArticles(articles); // Show all articles if search is empty
    } else {
      const filtered = Object.entries(articles).reduce((acc, [key, items]) => {
        const matchingItems = items.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        );
        if (matchingItems.length > 0) {
          acc[key] = matchingItems;
        }
        return acc;
      }, {} as Record<string, ArticleItem[]>);
      setFilteredArticles(filtered);
    }
  };

  return (
    <section className="mx-auto w-10/12 md:w-2/3 mt-2 flex flex-col gap-16 mb-20">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="text-center mt-8">
        <h1 className="text-5xl font-bold mb-4 font-cormorantGaramond">
          Your Ultimate Aviation Learning Hub
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          From beginner basics to advanced techniques,
          <br /> everything you need is here—simple, clear, and ready to
          explore.
        </p>
        <Button onClick={toggleSidebar}>Explore Topics</Button>
      </section>

      {/* Search Box */}
      <section className="flex justify-center mt-2 mb-4">
        <div className="relative w-full md:w-2/3">
          <SearchBox onSearch={handleSearch} />
        </div>
      </section>

      {/* Latest Additions */}
      <section>
        {loading ? (
          <div className="grid place-items-center">
            <Loader />
          </div>
        ) : Object.keys(filteredArticles).length > 0 ? (
          <>
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-bold text-center mb-2 font-cormorantGaramond">
                What&apos;s New
              </h2>
              <p className="text-sm text-gray-600 mb-4 text-center">
                Explore the latest additions and insights in aviation and flight
                simulation.
              </p>
            </div>
            <ArticleCardGrid articles={filteredArticles} />
          </>
        ) : (
          <p className="text-center text-2xl font-bold font-cormorantGaramond">
            No results found.
          </p>
        )}
      </section>
    </section>
  );
};

export default HomePage;
