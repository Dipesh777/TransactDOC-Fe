import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

const AppLayout = () => {
    const { logout }: any = useAuth();

    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/about">About</Link>
                <button onClick={logout}>Logout</button>
            </nav>
            <Outlet />
        </>
    );
};

export default AppLayout;
