import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { CMS_GRAPHQL_API_URL } from "./api-client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: CMS_GRAPHQL_API_URL,
  }),
  cache: new InMemoryCache(),
});

export default client;
