export const sanitizeAndTruncateContent = (
  content: string | null,
  title: string,
  maxLength: number = 200
): string => {
  if (!content) {
    return "No description available.";
  }

  // Sanitize the content
  const sanitizedContent = content
    .replace(/[#>*_`[\]]+/g, "") // Remove markdown syntax
    .replace(/\n+/g, " ") // Remove line breaks
    .trim();

  // Remove the title from the content to avoid duplication
  const filteredContent = sanitizedContent.startsWith(title)
    ? sanitizedContent.slice(title.length).trim()
    : sanitizedContent;

  // Truncate the content to the specified max length
  return filteredContent.length > maxLength
    ? filteredContent.slice(0, maxLength).trim() + "..."
    : filteredContent;
};
