import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkTokenExpiration } from "../utils/authUtils";

const AuthChecker = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const shouldRedirect = checkTokenExpiration();
    if (shouldRedirect) {
      navigate("/sign-in");
    }
  }, [navigate]);

  return children;
};

export default AuthChecker;
