import { createBrowserRouter } from "react-router-dom";
import { CssAssesment } from "./page/css-assessment";
import { JsAssessment } from "./page/js-assessment";
import { Presentation } from "./page/presentation";
import { App } from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Presentation />,
      },
      {
        path: "/css-assesment",
        element: <CssAssesment />,
      },
      {
        path: "/js-assesment",
        element: <JsAssessment />,
      },
    ],
  },
]);
