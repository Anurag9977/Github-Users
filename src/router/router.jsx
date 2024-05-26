import { createBrowserRouter } from "react-router-dom";
import { Error, HomeLayout, Login, ProtectedRoute } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <HomeLayout />
      </ProtectedRoute>
    ),
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
