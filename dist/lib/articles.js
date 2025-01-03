"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArticleData = exports.getCategorisedArticles = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const gray_matter_1 = __importDefault(require("gray-matter"));
const moment_1 = __importDefault(require("moment"));
const remark_1 = require("remark");
const remark_html_1 = __importDefault(require("remark-html"));
const articlesDirectory = path_1.default.join(process.cwd(), "articles");
const getSortedArticles = () => {
    const fileNames = fs_1.default.readdirSync(articlesDirectory);
    const allArticlesData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "");
        const fullPath = path_1.default.join(articlesDirectory, fileName);
        const fileContents = fs_1.default.readFileSync(fullPath, "utf-8");
        const matterResult = (0, gray_matter_1.default)(fileContents);
        const date = (0, moment_1.default)(matterResult.data.date, "DD-MM-YYYY").format("DD-MM-YYYY");
        return {
            id,
            title: matterResult.data.title,
            mainChapter: matterResult.data.mainChapter,
            chapter: matterResult.data.chapter,
            isLive: matterResult.data.isLive || false,
            resources: matterResult.data.resources || [],
            date,
        };
    });
    return allArticlesData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        }
        else {
            return -1;
        }
    });
};
const getCategorisedArticles = () => {
    const articles = getSortedArticles();
    const categorizedArticles = {};
    articles.forEach((article) => {
        if (categorizedArticles[article.chapter]) {
            categorizedArticles[article.chapter].push(article);
        }
        else {
            categorizedArticles[article.chapter] = [article];
        }
    });
    return categorizedArticles;
};
exports.getCategorisedArticles = getCategorisedArticles;
const getArticleData = async (id) => {
    const fullPath = path_1.default.join(articlesDirectory, `${id}.md`);
    const fileContents = fs_1.default.readFileSync(fullPath, "utf-8");
    const matterResult = (0, gray_matter_1.default)(fileContents);
    const processedContent = await (0, remark_1.remark)()
        .use(remark_html_1.default)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();
    const date = (0, moment_1.default)(matterResult.data.date, "DD-MM-YYYY").format("DD-MM-YYYY");
    return {
        id,
        contentHtml,
        title: matterResult.data.title,
        mainChapter: matterResult.data.mainChapter,
        chapter: matterResult.data.chapter,
        isLive: matterResult.data.isLive || false,
        resources: matterResult.data.resources || [],
        date,
    };
};
exports.getArticleData = getArticleData;
