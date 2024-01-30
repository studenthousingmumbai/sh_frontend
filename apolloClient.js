import { ApolloClient, InMemoryCache } from "@apollo/client";

const defaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
    },
}

const client = new ApolloClient({
    uri: "https://api-ap-south-1.hygraph.com/v2/cljs8ted414iv01um7a7c838k/master",
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
});

export default client; 