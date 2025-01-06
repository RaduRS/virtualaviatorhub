import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { sanitizeAndTruncateContent } from "@/lib/articles";
import Link from "next/link";

interface ArticleCardProps {
  image: string;
  title: string;
  chapter: string;
  url: string;
  content: string | null;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  image,
  title,
  chapter,
  url,
  content,
}) => {
  const truncatedContent = sanitizeAndTruncateContent(content, title, 100);

  return (
    <Link href={url} className="no-underline">
      <Card className="shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
        {/* Header with Image */}
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
            <Image
              src={image}
              alt={title}
              fill
              className="rounded-t-md object-cover"
              priority
            />
            {title !== chapter && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/60 to-transparent text-white text-sm font-medium px-4 py-2 rounded-b-md">
                {chapter}
              </div>
            )}
          </div>
        </CardHeader>

        {/* Content and Footer */}
        <section className="flex flex-col flex-grow">
          {/* Content Area */}
          <div className="flex-grow px-4 pt-4">
            <CardTitle className="text-xl font-bold line-clamp-2">
              {title}
            </CardTitle>
            <CardDescription className="text-sm text-neutral-600 mt-2 line-clamp-3">
              {truncatedContent}
            </CardDescription>
          </div>

          {/* Footer */}
          <CardFooter className="mt-auto px-4 pt-4 pb-6">
            <Button variant="default" className="w-full">
              Learn More
            </Button>
          </CardFooter>
        </section>
      </Card>
    </Link>
  );
};

export default ArticleCard;
