import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

const PublicRoute = ({ children }: any) => {
    const { token }: any = useAuth();
    console.log('publicToken', token);

    return token ? <Navigate to="/" replace /> : children;
};

export default PublicRoute;