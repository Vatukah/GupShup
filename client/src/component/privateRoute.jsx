import { useAuth } from "../context/authContext.jsx";
import { Navigate } from "react-router-dom";
import LoadingOverlay from "./loader.jsx";
export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  return (
    <div>
      {loading && <LoadingOverlay />}
      {user ? children : <Navigate to={"/signUp"} />}
    </div>
  );
}
