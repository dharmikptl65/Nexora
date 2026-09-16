import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const user = localStorage.getItem("signupUser");

  if (!user) {
    return <Navigate to="/Signup" replace />;
  }

  return children;
}

export default ProtectedRoute;