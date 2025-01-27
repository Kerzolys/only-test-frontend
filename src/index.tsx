import { StrictMode } from "react";

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.scss";

if (process.env.NODE_ENV === "development") {
  import("./mocks/browser").then(({ worker }) => {
    worker.start();
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
