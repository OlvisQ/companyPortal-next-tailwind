import React from "react";
import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { useApollo } from "../lib/apollo";
import store from "@/redux/store";
import withRedux from "next-redux-wrapper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import "@/styles/tailwind.css";
import "@/styles/global.scss";

// import { ApolloClient, InMemoryCache } from '@apollo/client';
// const client = new ApolloClient({
//   uri: '/api/graphql',
//   cache: new InMemoryCache(),
// });

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <Component />
      </Provider>
    </ApolloProvider>
  );
};

const makeStore = () => store;

export default withRedux(makeStore)(App);
