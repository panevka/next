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

  // const dupa = {
  //   article: {
  //     documentId: "t8w0li40yoxqzif4ewgsbvjw",
  //     description: "How a bug on MySQL is becoming a meme on the internet",
  //     publishedAt: "2025-12-06T18:21:49.816Z",
  //     slug: "a-bug-is-becoming-a-meme-on-the-internet",
  //     title: "A bug is becoming a meme on the internet",
  //     updatedAt: "2025-12-06T18:21:49.795Z",
  //     category: { name: "tech" },
  //     author: {
  //       avatar: {
  //         url: "/uploads/sarahbaker_strapi_dcaa2f10b5.jpeg",
  //       },
  //       name: "Sarah Baker",
  //     },
  //     cover: {
  //       url: "/uploads/a_bug_is_becoming_a_meme_on_the_internet_2e74aca974.jpeg",
  //       caption: "a-bug-is-becoming-a-meme-on-the-internet",
  //     },
  //   },
  // } satisfies ArticlesResponse;
  //
  // return dupa;
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
