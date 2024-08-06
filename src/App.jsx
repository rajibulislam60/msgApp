import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./Pages/SignUp";



const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },

]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
