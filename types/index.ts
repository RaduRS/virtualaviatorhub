interface Resource {
  type: string;
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
};

export type ArticleWithPath = {
  title: string;
  chapter: string;
  mainChapter: string;
  path: string;
  isLive: boolean;
};
