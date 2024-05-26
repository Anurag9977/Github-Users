import { useAuth0 } from "@auth0/auth0-react";
import MainLoader from "../components/MainLoader";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isLoading, isAuthenticated, user } = useAuth0();
  if (isLoading) {
    return <MainLoader />;
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (isAuthenticated && user) {
    return children;
  }
};
export default ProtectedRoute;
