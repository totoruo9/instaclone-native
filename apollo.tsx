import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);

const client = new ApolloClient({
    uri: 'https://cfd1-118-219-45-188.ngrok.io/graphql',
    cache: new InMemoryCache()
});
export default client;