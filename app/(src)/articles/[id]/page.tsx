import { getArticle } from "../api/get-article/get-article";
import { Image, Title, Typography, Text } from "@mantine/core";

interface Props {
  params: Promise<{ id: string }>;
}

export const revalidate = 60;

const ArticlePage = async ({ params }: Props) => {
  // console.log("Time params start: " + Date.now());
  console.time("params");
  const { id } = await params;
  console.timeEnd("params");

  console.time("request");
  const response = await getArticle({ documentId: id });
  console.timeEnd("request");
  const article = response?.article;
  // const article = response?.articles[0];
  console.log(JSON.stringify(response));

  return (
    <div className="dark:bg-black p-8">
      <Title order={1} c="white">
        {article?.title}
      </Title>
      <Text c="white" size="xl">
        {article?.description}
      </Text>
      {/* <Text c="white">{article?.createdAt}</Text> */}
      <Text c="white">{article?.updatedAt}</Text>
      <Image src={article?.cover?.url} alt={article?.cover?.caption} />
    </div>
  );
};

export default ArticlePage;
