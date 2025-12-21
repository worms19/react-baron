import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";

const container = document.getElementById("baronCrane");
if (!container) {
  throw new Error("Missing #baronCrane mount element");
}

createRoot(container).render(React.createElement(App));
