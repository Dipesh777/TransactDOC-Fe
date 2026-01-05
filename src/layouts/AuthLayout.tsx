import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <h1>Auth Area</h1>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
