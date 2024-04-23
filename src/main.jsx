import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Users from "./components/Users";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ContextProvider from "./providers/ContextProvider";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Users />,
        loader: () => fetch("http://localhost:5000/all-users"),
      },
      {
        path: "/add-user",
        element: <AddUser />,
      },
      {
        path: "/update-user/:id",
        element: <UpdateUser />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/all-users/${params.id}`),
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={routes} />
    </ContextProvider>
  </React.StrictMode>
);
