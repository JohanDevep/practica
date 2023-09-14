import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Inicio } from "./screens/inicio/";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Inicio />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
