import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style
import "@fontsource/roboto/500.css"; // Specify weight
import "@fontsource/roboto/500-italic.css"; // Specify weight and style
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
