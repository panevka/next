import { apiClient } from "@/config/api-client";
import { gql } from "@apollo/client";

export const getArticles = async (): Promise<ArticlesResponse | undefined> => {
  const response = await apiClient.query<ArticlesResponse>({
    query: gql`
      query Articles {
        articles {
          documentId
          title
          description
          slug
          createdAt
          updatedAt
          publishedAt
        }
      }
    `,
  });

  return response.data;
};

type ArticlesResponse = {
  articles: Article[];
  meta: Meta;
};

type Article = {
  documentId: string;
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type Meta = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};
