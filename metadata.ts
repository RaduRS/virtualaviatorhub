import { ArticleItem } from "./types";

export const articlesMetadata: Record<
  string,
  Omit<ArticleItem, "id" | "date">
> = {
  "what-is-aviation": {
    title: "What is Aviation?",
    chapter: "What is Aviation?",
    isLive: true,
    resources: [
      { type: "video", url: "https://www.youtube.com/watch?v=example" },
      { type: "article", url: "https://www.example.com/aviation" },
    ],
  },
  "history-of-aviation": {
    title: "History of Aviation",
    chapter: "What is Aviation?",
    isLive: true,
    resources: [
      { type: "video", url: "https://www.youtube.com/watch?v=example" },
      { type: "video", url: "https://www.youtube.com/watch?v=example" },
      { type: "article", url: "https://www.example.com/aviation" },
      { type: "article", url: "https://www.example.com/aviation" },
    ],
  },
  "types-of-aviation": {
    title: "Types of Aviation (General, Commercial, Military)",
    chapter: "What is Aviation?",
    isLive: false,
    resources: [
      { type: "video", url: "https://www.youtube.com/watch?v=example" },
      { type: "article", url: "https://www.example.com/aviation" },
    ],
  },
  "flight-simulation-basics": {
    title: "Flight Simulation Basics",
    chapter: "Flight Simulation Basics",
    isLive: false,
    resources: [
      { type: "video", url: "https://www.youtube.com/watch?v=example" },
      { type: "article", url: "https://www.example.com/aviation" },
    ],
  },
  "overview-of-flight-simulators": {
    title: "Overview of Flight Simulators",
    chapter: "Flight Simulation Basics",
    isLive: true,
    resources: [
      { type: "video", url: "https://www.youtube.com/watch?v=example" },
      { type: "article", url: "https://www.example.com/aviation" },
    ],
  },
  "benefits-of-simulation": {
    title: "Benefits of Learning Through Simulation",
    chapter: "Flight Simulation Basics",
    isLive: false,
    resources: [
      { type: "video", url: "https://www.youtube.com/watch?v=example" },
      { type: "article", url: "https://www.example.com/aviation" },
    ],
  },
  "choosing-your-first-simulator": {
    title: "Choosing Your First Simulator (MSFS, X-Plane, etc.)",
    chapter: "Flight Simulation Basics",
    isLive: true,
    resources: [
      { type: "video", url: "https://www.youtube.com/watch?v=example" },
      { type: "video", url: "https://www.youtube.com/watch?v=example" },
      { type: "article", url: "https://www.example.com/aviation" },
    ],
  },
};
