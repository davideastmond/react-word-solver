import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { HelpPage } from "../pages/help/HelpPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "help/:articleId?",
    element: <HelpPage />,
    errorElement: <HelpPage />,
  },
]);
