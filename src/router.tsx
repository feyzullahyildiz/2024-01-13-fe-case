import { createBrowserRouter } from "react-router-dom";
import { CssAssesment } from "./page/css-assessment";
import { JsAssessment } from "./page/js-assessment";
import { Presentation } from "./page/presentation";
import { Entrance, Exam, ShowResult } from "./page/js-assessment/page";
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
        children: [
          { path: "/js-assesment", element: <Entrance /> },
          { path: "/js-assesment/exam", element: <Exam /> },
          { path: "/js-assesment/show-result", element: <ShowResult /> },
        ],
      },
    ],
  },
]);
