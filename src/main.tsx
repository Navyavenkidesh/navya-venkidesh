// @ts-expect-error react-dom/client is provided by the application dependencies
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// @ts-ignore: CSS imports are handled by the application bundler
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
