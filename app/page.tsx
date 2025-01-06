import ArticleCardGrid from "@/components/ArticleCardGrid";
import Header from "@/components/Header";
// import { Button } from "@/components/ui/button";
import { getCategorisedArticles } from "@/lib/articles";

const HomePage = () => {
  const articles = getCategorisedArticles();

  // const handleExploreTopicsClick = () => {
  //   // Find the button with `data-sidebar="trigger"` and simulate a click
  //   const sidebarTrigger = document.querySelector('[data-sidebar="trigger"]');
  //   if (sidebarTrigger) {
  //     (sidebarTrigger as HTMLButtonElement).click();
  //   }
  // };

  return (
    // <section className="mx-auto w-11/12 md:w-3/4 mt-6 flex flex-col gap-16 mb-20">
    <section className="mx-auto w-10/12 md:w-2/3 mt-2 flex flex-col gap-16 mb-20">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="text-center my-8">
        <h1 className="text-5xl font-bold mb-4 font-cormorantGaramond">
          Your Ultimate Aviation Learning Hub
        </h1>
        <p className="text-lg text-gray-600">
          From beginner basics to advanced techniques,
          <br /> everything you need is here—simple, clear, and ready to
          explore.
        </p>
      </section>

      {/* Search Box */}
      <section className="flex justify-center mt-6 mb-8">
        <div className="relative w-full md:w-2/3">
          <input
            type="text"
            placeholder="Search for topics..."
            disabled
            className="border border-gray-300 rounded-lg px-4 py-2 w-full shadow-sm bg-gray-200 text-gray-500 cursor-not-allowed"
          />
          <p className="absolute top-full mt-2 text-sm text-gray-500 text-center w-full italic">
            Search functionality is coming soon!
          </p>
        </div>
      </section>

      {/* Latest Additions */}
      <section>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center mb-2 font-cormorantGaramond">
            What&apos;s New
          </h2>
          <p className="text-sm text-gray-600 mb-4 text-center">
            Explore the latest additions and insights in aviation and flight
            simulation.
          </p>
        </div>
        <ArticleCardGrid articles={articles} />
        {/* <Button
          variant="outline"
          className="mt-4"
          onClick={handleExploreTopicsClick}
        >
          Explore more topics
        </Button> */}
      </section>
    </section>
  );
};

export default HomePage;
