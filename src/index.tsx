import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import ApolloProviderWrapper from "./services/ApolloClient";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProviderWrapper>
      <App />
    </ApolloProviderWrapper>
  </React.StrictMode>
);
