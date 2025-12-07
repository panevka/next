import { apiClient } from "@/config/api-client";
import { gql } from "@apollo/client";

export const getArticle = async ({
  documentId,
}: {
  documentId: string;
}): Promise<ArticlesResponse | undefined> => {
  const response = await apiClient.query<ArticlesResponse>({
    query: gql`
      query Article($documentId: ID!) {
        article(documentId: $documentId) {
          documentId
          description
          publishedAt
          slug
          title
          updatedAt
          category {
            name
          }
          author {
            avatar {
              url
            }
            name
          }
          cover {
            url
            caption
          }
        }
      }
    `,
    variables: {
      documentId,
    },
  });

  return response.data;
};

type ArticlesResponse = {
  article: Article;
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
  category: {
    name: string;
  };
  author: {
    avatar: {
      url: string;
    };
    name: string;
  };
  cover: {
    url: string;
    caption: string;
  };
};

type Meta = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};
