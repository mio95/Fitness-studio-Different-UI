import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import { Outlet } from "react-router-dom";

const RequireAuth = ({ allowedRoles }) => {
  const { token, role } = useAuth();
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  // pristupamo ovoj ruti
  // ako nema pravo pristupa ovoj ruti, prebacimo ga na login stranicu
  if (allowedRoles && !allowedRoles.includes(role)) {
    // nema pravo pristupa ovoj ruti
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default RequireAuth;
