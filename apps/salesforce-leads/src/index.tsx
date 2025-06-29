import { GlobalStyles } from "@contentful/f36-components";
import { SDKProvider } from "@contentful/react-apps-toolkit";

import { createRoot } from "react-dom/client";
import App from "./App";
import LocalhostWarning from "./components/LocalhostWarning";

import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

if (process.env.NODE_ENV === "development" && window.self === window.top) {
  root.render(<LocalhostWarning />);
} else {
  root.render(
    <SDKProvider>
      <GlobalStyles />
      <App />
    </SDKProvider>
  );
}
