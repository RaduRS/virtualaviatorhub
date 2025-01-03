"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const solid_1 = require("@heroicons/react/24/solid");
const articles_1 = require("@/lib/articles");
const metadata_1 = require("@/metadata");
const outline_1 = require("@heroicons/react/24/outline");
const Header_1 = __importDefault(require("@/components/Header"));
const Article = async ({ params }) => {
    const { slug } = await params;
    const articleData = await (0, articles_1.getArticleData)(slug);
    const articleMetadata = metadata_1.articlesMetadata[slug];
    const chapterSlug = Object.keys(metadata_1.articlesMetadata).find((key) => metadata_1.articlesMetadata[key].chapter === articleData.chapter);
    return (<section className="mx-auto w-11/12 xl:w-10/12 2xl:w-8/12 flex flex-col gap-8 mt-2 mb-20">
      {/* Back to home and Chapter */}
      <Header_1.default />

      <div className="flex justify-between">
        <link_1.default href={"/"} className="flex flex-row gap-1 items-center text-gray-600 hover:text-gray-900 transition">
          <solid_1.ArrowLeftIcon width={20}/>
        </link_1.default>
        {chapterSlug && (<link_1.default href={`/${chapterSlug}`} // Navigate to the chapter's main page
         className="text-lg font-semibold hover:underline">
            {articleData.chapter}
          </link_1.default>)}
      </div>
      {/* Main content and resources */}
      <div className="grid grid-cols-1 lg:grid-cols-[auto_20%] gap-8">
        {/* Main article */}
        <article className="article bg-white p-6 rounded-lg shadow-md overflow-y-auto" dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}/>

        {/* Resources */}
        {articleMetadata.resources && articleMetadata.resources.length > 0 && (<aside className="bg-gray-50 p-4 rounded-lg shadow-md overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Resources
            </h2>
            <ul className="flex flex-col gap-4">
              {articleMetadata.resources.map((resource, index) => (<li key={index} className="flex items-center gap-3">
                  {/* Icon */}
                  {resource.type === "video" ? (<outline_1.VideoCameraIcon className="h-4 w-4 text-blue-500"/>) : (<outline_1.BookOpenIcon className="h-4 w-4 text-green-500"/>)}
                  {/* Link */}
                  <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 font-medium text-sm underline">
                    {resource.type === "video" ? "Watch Video" : "Read Article"}
                  </a>
                </li>))}
            </ul>
          </aside>)}
      </div>
    </section>);
};
exports.default = Article;
