"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ArticleListItem_1 = __importDefault(require("@/components/ArticleListItem"));
const Header_1 = __importDefault(require("@/components/Header"));
const articles_1 = require("@/lib/articles");
const HomePage = () => {
    const articles = (0, articles_1.getCategorisedArticles)();
    return (<section className="mx-auto w-10/12 md:w-2/3 mt-2 flex flex-col gap-16 mb-20">
      <Header_1.default />
      <p className="article">
        Types of Engines (Piston, Turboprop, Jet) Fuel Mixture and Carburetor
        Heat Propeller Systems
      </p>
      <section>maybe a big search box</section>

      <section>
        <h2>Latest additions</h2>
        <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
          {articles !== null &&
            Object.keys(articles).map((article) => (<ArticleListItem_1.default articles={articles[article]} key={article}/>))}
        </section>
      </section>
    </section>);
};
exports.default = HomePage;
