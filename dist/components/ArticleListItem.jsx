"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const ArticleItemList = ({ articles }) => {
    return (<div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2.5 font-cormorantGaramond  text-2xl">
        {articles.map((article, id) => (<link_1.default href={`/${article.id}`} key={id} className="text-neutral-900 hover:text-amber-700 transition duration-150">
            {article.title}
            <h2 className="text-lg">{article.chapter}</h2>
          </link_1.default>))}
      </div>
    </div>);
};
exports.default = ArticleItemList;
