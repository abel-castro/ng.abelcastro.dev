export interface Post {
  title: string;
  slug: string;
  meta_description: string;
  content: string;
  date: string;
  tags: Tag[];
}

export interface Tag {
  name: string;
}
