import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Home from "./Pages/Home";
import RootLayout from "./layout/RootLayout";



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<SignIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}></Route>
      </Route>
    </>
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
