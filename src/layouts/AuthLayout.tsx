import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="mt-8">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
