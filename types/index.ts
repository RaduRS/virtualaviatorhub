interface Resource {
  type: string;
  title: string;
  url: string;
}
export type ArticleItem = {
  id: string;
  title: string;
  mainChapter: string;
  chapter: string;
  date: string;
  isLive: boolean;
  resources: Resource[];
  image: string;
  content: string;
};

export type ArticleWithPath = {
  title: string;
  chapter: string;
  mainChapter: string;
  path: string;
  isLive: boolean;
};
