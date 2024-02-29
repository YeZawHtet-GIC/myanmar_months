import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//rrd
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Month from "./Month";
import MonthDetails from "./MonthDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        index:true,
        element: <Home />
      },
      {
        path: "/months",
        element: <Month />
      },
      {
        path: "/months/:id",
        element: <MonthDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

