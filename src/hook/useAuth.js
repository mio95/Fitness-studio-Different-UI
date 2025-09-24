import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContextObj";

export const useAuth = () => useContext(AuthContext);
