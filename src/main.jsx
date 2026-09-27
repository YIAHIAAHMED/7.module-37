import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "./App";
import Root from "./components/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: Root,
    children: [
      { index: true, Component: Home },
      { path: "settings", Component: Settings },
    ]
  },
  {
    path: "about",
    element: <div>about me</div>
  },
  {
    path: "blogs",
    element: <div>All my Blogs Here</div>
  },
  {

    path: "app",
    Component: App,

  }

]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
