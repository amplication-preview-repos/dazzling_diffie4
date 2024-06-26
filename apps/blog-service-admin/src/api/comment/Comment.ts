import { BlogPost } from "../blogPost/BlogPost";

export type Comment = {
  author: string | null;
  blogPost?: BlogPost | null;
  content: string | null;
  createdAt: Date;
  datePosted: Date | null;
  id: string;
  updatedAt: Date;
};
