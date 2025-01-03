import { getAllArticlesMetadata } from "@/lib/articles";

export async function GET() {
  try {
    const articles = await getAllArticlesMetadata();
    return new Response(JSON.stringify(articles), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching articles metadata:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch articles metadata." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
