import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

const ProtectedRoute = ({ children }: any) => {
    console.log('useAuth', useAuth())
    const { token }: any = useAuth();
    return (
        token ? children : <Navigate to="/login" replace />
    )
}

export default ProtectedRoute;