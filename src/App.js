import "./App.css";
import ExchangeRates from "./ExchangeRates";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo / GraphQL app 🚀</h2>
        <ExchangeRates />
      </div>
    </ApolloProvider>
  );
}

export default App;
