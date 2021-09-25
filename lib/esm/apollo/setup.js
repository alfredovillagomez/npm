import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
export default (uri) => {
    const httpLink = new HttpLink({ uri });
    const authLink = setContext((_, { headers }) => ({
        headers: { ...headers },
    }));
    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    });
};
//# sourceMappingURL=setup.js.map