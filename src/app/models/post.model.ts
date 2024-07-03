export interface Post {
  title: string;
  slug: string;
  meta_description: string;
  content: string;
  date: string;
  tags: Tag[];
}

export type PostsAPIResponse = {
  count: number;
  next: string;
  previous: string | null;
  results: Post[];
};


export interface Tag {
  name: string;
}
