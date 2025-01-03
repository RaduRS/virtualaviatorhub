import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { getArticleData } from "@/lib/articles";
import { articlesMetadata } from "@/metadata";
import { VideoCameraIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import Header from "@/components/Header";

const Article = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const articleData = await getArticleData(slug);
  const articleMetadata = articlesMetadata[slug];

  const chapterSlug = Object.keys(articlesMetadata).find(
    (key) => articlesMetadata[key].chapter === articleData.chapter
  );

  return (
    <section className="mx-auto w-11/12 xl:w-10/12 2xl:w-8/12 flex flex-col gap-8 mt-2 mb-20">
      {/* Back to home and Chapter */}
      <Header />

      <div className="flex justify-between">
        <Link
          href={"/"}
          className="flex flex-row gap-1 items-center text-gray-600 hover:text-gray-900 transition"
        >
          <ArrowLeftIcon width={20} />
        </Link>
        {chapterSlug && (
          <Link
            href={`/${chapterSlug}`} // Navigate to the chapter's main page
            className="text-lg font-semibold hover:underline"
          >
            {articleData.chapter}
          </Link>
        )}
      </div>
      {/* Main content and resources */}
      <div className="grid grid-cols-1 lg:grid-cols-[auto_20%] gap-8">
        {/* Main article */}
        <article
          className="article bg-white p-6 rounded-lg shadow-md overflow-y-auto"
          dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
        />

        {/* Resources */}
        {articleMetadata.resources && articleMetadata.resources.length > 0 && (
          <aside className="bg-gray-50 p-4 rounded-lg shadow-md overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Resources
            </h2>
            <ul className="flex flex-col gap-4">
              {articleMetadata.resources.map((resource, index) => (
                <li key={index} className="flex items-center gap-3">
                  {/* Icon */}
                  {resource.type === "video" ? (
                    <VideoCameraIcon className="h-4 w-4 text-blue-500" />
                  ) : (
                    <BookOpenIcon className="h-4 w-4 text-green-500" />
                  )}
                  {/* Link */}
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 font-medium text-sm underline"
                  >
                    {resource.type === "video" ? "Watch Video" : "Read Article"}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </section>
  );
};

export default Article;
