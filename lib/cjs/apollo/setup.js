"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
const apollo_link_context_1 = require("apollo-link-context");
const apollo_client_1 = require("apollo-client");
const apollo_link_http_1 = require("apollo-link-http");
exports.default = (uri) => {
    const httpLink = new apollo_link_http_1.HttpLink({ uri });
    const authLink = apollo_link_context_1.setContext((_, { headers }) => ({
        headers: { ...headers },
    }));
    return new apollo_client_1.ApolloClient({
        link: authLink.concat(httpLink),
        cache: new apollo_cache_inmemory_1.InMemoryCache(),
    });
};
//# sourceMappingURL=setup.js.map