import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App, AppProps } from "./components/App";
import "./styles.css";
import { AppProvider } from "./context/appContext";

const container = document.getElementById("app")!;
const root = createRoot(container);

declare global {
  interface Window {
    APP_PROPS: AppProps;
  }
}

root.render(
  <StrictMode>
    <AppProvider>
      <App {...window.APP_PROPS} />
    </AppProvider>
  </StrictMode>
);
