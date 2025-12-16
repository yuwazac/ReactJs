import React from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";                   // ✅ FIXED
import Home from "./components/Home.jsx";
import PostDetail from "./components/PostDetail.jsx";  // ✅ FIXED
import CreatePost from "./components/CreatePost.jsx";
import Login from "./components/Login.jsx";
import NotFound from "./components/NotFound.jsx";
import ProtectedRoute from "./components/ProtectRoutes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "posts/:postId",
        element: <PostDetail />,
      },
      {
        path: "create",
        element: (
          <ProtectedRoute>
            <CreatePost />
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
