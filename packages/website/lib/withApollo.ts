import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from "apollo-boost";
import { NextPageContext } from "next";
import nextWithApollo from "next-with-apollo";

const isBrowser = typeof window !== "undefined";
const isProduction = process.env.NODE_ENV === "production"

const resolveUri = (ctx: NextPageContext | undefined) =>
  "http://localhost:4000/api/graphql"; // dev

export const withApollo = nextWithApollo(
  ({ ctx, headers, initialState }) =>
    new ApolloClient({
      connectToDevTools: isBrowser,
      ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
      link: new HttpLink({
        uri: resolveUri(ctx),
        credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
        // Use fetch() polyfill on the server
        fetch,
        // TODO
        // headers: options.headers,
      }),
      cache: new InMemoryCache().restore(initialState || {}),
    }),
);
