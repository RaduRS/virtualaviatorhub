"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const gray_matter_1 = __importDefault(require("gray-matter"));
const metadata_1 = require("./metadata");
const articlesDirectory = path_1.default.join(process.cwd(), "articles");
const generateMarkdownFiles = () => {
    // Ensure the articles directory exists
    if (!fs_1.default.existsSync(articlesDirectory)) {
        fs_1.default.mkdirSync(articlesDirectory);
    }
    Object.entries(metadata_1.articlesMetadata).forEach(([key, metadata]) => {
        const filePath = path_1.default.join(articlesDirectory, `${key}.md`);
        if (fs_1.default.existsSync(filePath)) {
            // Read existing file
            const fileContents = fs_1.default.readFileSync(filePath, "utf-8");
            const { content, data } = (0, gray_matter_1.default)(fileContents);
            // Update only the isLive field
            const updatedData = Object.assign(Object.assign({}, data), { isLive: metadata.isLive, resources: metadata.resources || [] });
            // Recreate the file with updated frontmatter and original content
            const updatedContent = gray_matter_1.default.stringify(content, updatedData);
            fs_1.default.writeFileSync(filePath, updatedContent, "utf-8");
            console.log(`File "${filePath}" updated successfully.`);
        }
        else {
            // Create a new file if it doesn't exist
            const currentDate = new Date().toISOString().split("T")[0];
            const newContent = `---
title: "${metadata.title}"
mainChapter: "${metadata.mainChapter}"
chapter: "${metadata.chapter}"
isLive: ${metadata.isLive}
resources:
${metadata.resources
                ? metadata.resources
                    .map((resource) => `  - type: ${resource.type}\n    url: ${resource.url}`)
                    .join("\n")
                : ""}
date: "${currentDate}"
---

# ${metadata.title}
`;
            fs_1.default.writeFileSync(filePath, newContent, "utf-8");
            console.log(`File "${filePath}" created successfully.`);
        }
    });
};
// Run the script
generateMarkdownFiles();
