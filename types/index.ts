interface Resource {
  type: string;
  url: string;
}
export type ArticleItem = {
  id: string;
  title: string;
  chapter: string;
  date: string;
  isLive: boolean;
  resources: Resource[];
};
