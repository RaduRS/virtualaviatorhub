import fs from "fs";
import path from "path";
import { articlesMetadata } from "./metadata";

const articlesDirectory = path.join(process.cwd(), "articles");

const generateMarkdownFiles = () => {
  // Ensure the articles directory exists
  if (!fs.existsSync(articlesDirectory)) {
    fs.mkdirSync(articlesDirectory);
  }

  Object.entries(articlesMetadata).forEach(([key, metadata]) => {
    const filePath = path.join(articlesDirectory, `${key}.md`);

    // Skip if the file already exists
    if (fs.existsSync(filePath)) {
      console.log(`File "${filePath}" already exists. Skipping.`);
      return;
    }

    // Create the Markdown file with frontmatter
    const content = `---
title: "${metadata.title}"
category: "${metadata.category}"
date: "${metadata.date}"
---

# ${metadata.title}
`;

    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`File "${filePath}" created successfully.`);
  });
};

// Run the script
generateMarkdownFiles();
