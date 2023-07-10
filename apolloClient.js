import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api-ap-south-1.hygraph.com/v2/cljs8ted414iv01um7a7c838k/master",
    cache: new InMemoryCache(),
});

export default client; 