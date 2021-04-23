import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { App } from "./App";
import { getAcessToken } from "./accessToken";

const client: any = new ApolloClient<any>({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
  request: (operation) => {
    const accessToken = getAcessToken();

    if (accessToken) {
      operation.setContext({
        headers: {
          authorization: `bearer ${accessToken}`,
        },
      });
    }
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
