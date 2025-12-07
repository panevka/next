import { getArticle } from "../api/get-article/get-article";
import { Image, Title, Typography, Text } from "@mantine/core";

interface Props {
  params: Promise<{ id: string }>;
}

const ArticlePage = async ({ params }: Props) => {
  const { id } = await params;
  const response = await getArticle({ documentId: id });
  const article = response?.article;
  // const article = response?.articles[0];
  console.log(JSON.stringify(response));

  // type Article = {
  //   documentId: string;
  //   title: string;
  //   description: string;
  //   slug: string;
  //   createdAt: string;
  //   updatedAt: string;
  //   publishedAt: string;
  //   cover: {
  //     url: string;
  //     caption: string;
  //   };
  // };
  return (
    <div className="dark:bg-black p-8">
      <Title order={1} c="white">
        {article?.title}
      </Title>
      <Text c="white" size="xl">
        {article?.description}
      </Text>
      <Text c="white">{article?.createdAt}</Text>
      <Text c="white">{article?.updatedAt}</Text>
      <Image src={article?.cover?.url} alt={article?.cover?.caption} />
    </div>
  );
};

export default ArticlePage;
