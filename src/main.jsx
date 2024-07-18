import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import AboutPage from "./components/AboutPage";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
