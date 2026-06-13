import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./day2/pages/Login";
import DashBoard from "./day1/pages/DashBoard";
import RequestDetails from "./day2/pages/RequestDetails";

import { AuthProvider } from "./day2/context/AuthContext";
import ProtectedRoute from "./day2/routes/ProtectedRoute";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import NotFound from "./day2/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/admin-dashboard",
    element: (
      <ProtectedRoute role="admin">
        <DashBoard />
      </ProtectedRoute>
    ),
  },

  {
    path: "/student-dashboard",
    element: (
      <ProtectedRoute role="student">
        <DashBoard />
      </ProtectedRoute>
    ),
  },

  {
    path: "/",
    element: (
      <ProtectedRoute>
        <DashBoard />
      </ProtectedRoute>
    ),
  },

  {
    path: "/request/:id",
    element: (
      <ProtectedRoute>
        <RequestDetails />
      </ProtectedRoute>
    ),
  },

  {
    path: "/404",
    element: <NotFound />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
