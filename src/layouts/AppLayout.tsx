import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

const AppLayout = () => {
    const { logout }: any = useAuth();

    return (
        <>
            <nav className="max-w-4xl mx-auto mt-6 bg-white rounded-xl shadow-md px-8 py-4">
                <div className="flex items-center justify-around">
                    <Link to="/" className="text-gray-700 font-medium hover:text-blue-600 transition mr-4">Home</Link>
                    <Link to="/dashboard" className="text-gray-700 font-medium hover:text-blue-600 transition mr-4">Dashboard</Link>
                    <Link to="/about" className="text-gray-700 font-medium hover:text-blue-600 transition mr-4">About</Link>
                    <button onClick={logout} className="text-red-500 font-medium hover:text-red-600 transition mr-4">Logout</button>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default AppLayout;
