import { ApolloClient, InMemoryCache } from "@apollo/client";

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

const client = new ApolloClient({
  uri: "https://ap-south-1.cdn.hygraph.com/content/cmdpk3sju0d2g07ple7pi8rv1/master",
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});

export default client;
