import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Home from "./Pages/Home";
import RootLayout from "./layout/RootLayout";
import Message from "./Pages/Message";
import Notification from "./Pages/Notification";
import Setting from "./Pages/Setting";
import Leave from "./Pages/Leave";



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<SignIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/message" element={<Message />}></Route>
        <Route path="/notification" element={<Notification />}></Route>
        <Route path="/setting" element={<Setting />}></Route>
        <Route path="/leave" element={<Leave />}></Route>
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
