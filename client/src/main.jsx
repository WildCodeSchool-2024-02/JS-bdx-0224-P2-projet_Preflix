import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Article from "./pages/Article";
import Credits from "./pages/Credits";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Category from "./pages/Category";
import { TypeProvider } from "./contexts/CategoryContext";
import TermsOfUse from "./pages/TermsOfUse";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/series",
        element: <Series />,
      },
      {
        path: "/category/:categoryList",
        element: (
          <TypeProvider>
            <Category />
          </TypeProvider>
        ),
      },
      {
        path: "/media/:type/:id",
        element: <Article />,
      },
      {
        path: "/credits",
        element: <Credits />,
      },
      {
        path: "/terms-of-use",
        element: <TermsOfUse />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
