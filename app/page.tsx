import ArticleItemList from "@/components/ArticleListItem";
import Header from "@/components/Header";
import { getCategorisedArticles } from "@/lib/articles";

const HomePage = () => {
  const articles = getCategorisedArticles();

  return (
    <section className="mx-auto w-10/12 md:w-2/3 mt-2 flex flex-col gap-16 mb-20">
      <Header />
      <p className="article">
        Types of Engines (Piston, Turboprop, Jet) Fuel Mixture and Carburetor
        Heat Propeller Systems
      </p>
      <section>maybe a big search box</section>

      <section>
        <h2>Latest additions</h2>
        <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
          {articles !== null &&
            Object.keys(articles).map((article) => (
              <ArticleItemList articles={articles[article]} key={article} />
            ))}
        </section>
      </section>
    </section>
  );
};

export default HomePage;
