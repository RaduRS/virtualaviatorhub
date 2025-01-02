import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { articlesMetadata } from "./metadata";

const articlesDirectory = path.join(process.cwd(), "articles");

const generateMarkdownFiles = () => {
  // Ensure the articles directory exists
  if (!fs.existsSync(articlesDirectory)) {
    fs.mkdirSync(articlesDirectory);
  }

  Object.entries(articlesMetadata).forEach(([key, metadata]) => {
    const filePath = path.join(articlesDirectory, `${key}.md`);

    if (fs.existsSync(filePath)) {
      // Read existing file
      const fileContents = fs.readFileSync(filePath, "utf-8");
      const { content, data } = matter(fileContents);

      // Update only the isLive field
      const updatedData = {
        ...data,
        isLive: metadata.isLive,
      };

      // Recreate the file with updated frontmatter and original content
      const updatedContent = matter.stringify(content, updatedData);
      fs.writeFileSync(filePath, updatedContent, "utf-8");
      console.log(`File "${filePath}" updated successfully.`);
    } else {
      // Create a new file if it doesn't exist
      const currentDate = new Date().toISOString().split("T")[0];
      const newContent = `---
title: "${metadata.title}"
chapter: "${metadata.chapter}"
isLive: ${metadata.isLive}
date: "${currentDate}"
---

# ${metadata.title}
`;
      fs.writeFileSync(filePath, newContent, "utf-8");
      console.log(`File "${filePath}" created successfully.`);
    }
  });
};

// Run the script
generateMarkdownFiles();
