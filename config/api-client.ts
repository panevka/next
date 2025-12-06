import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const CMS_GRAPHQL_API_URL =
  process.env.CMS_API_URL || "http://localhost:1337/graphql";

export const apiClient = new ApolloClient({
  link: new HttpLink({ uri: CMS_GRAPHQL_API_URL }),
  cache: new InMemoryCache(),
});
