import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CommentWhereInput = {
  author?: StringNullableFilter;
  blogPost?: BlogPostWhereUniqueInput;
  content?: StringNullableFilter;
  datePosted?: DateTimeNullableFilter;
  id?: StringFilter;
};
