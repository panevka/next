import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Image, Title } from "@mantine/core";
import { getArticles } from "./api/get-articles/get-articles";
import Link from "next/link";

export const revalidate = 60; // revalidate every 24 hours

const ArticlesPage: React.FC = async () => {
  const response = await getArticles();
  const articles = response?.articles;

  console.log(JSON.stringify(articles));

  return (
    <div className="p-8 dark:bg-black">
      <Title c="white">Posts</Title>
      <Title c="white">This is the posts page.</Title>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles?.map((article) => (
          <Card key={article.documentId} className="w-full m-4">
            <CardHeader>
              <Link href={`/articles/${article.documentId}`}>
                <CardTitle>{article.title}</CardTitle>
              </Link>
              <CardDescription>
                {article.description}
                <Image src={article.cover.url} alt={article.cover.caption} />
              </CardDescription>
              {/* <CardAction>Card Action</CardAction> */}
            </CardHeader>
            <CardContent>
              <p>{article.description}</p>
            </CardContent>
            <CardFooter>
              <p>{article.publishedAt}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
