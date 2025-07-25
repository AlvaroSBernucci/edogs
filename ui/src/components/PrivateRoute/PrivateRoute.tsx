import { Navigate } from "react-router-dom";
import { getToken } from "../../utils/auth";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext";

function PrivateRoute({ children }: any) {
  const { login } = useContext(UserContext);
  const token = getToken();

  if (!token) return <Navigate to="/login" replace />;
  else if (login) return children;
}

export default PrivateRoute;
