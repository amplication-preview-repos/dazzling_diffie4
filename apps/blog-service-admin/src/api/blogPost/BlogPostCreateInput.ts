import { CommentCreateNestedManyWithoutBlogPostsInput } from "./CommentCreateNestedManyWithoutBlogPostsInput";

export type BlogPostCreateInput = {
  author?: string | null;
  comments?: CommentCreateNestedManyWithoutBlogPostsInput;
  content?: string | null;
  publishedDate?: Date | null;
  title?: string | null;
};
