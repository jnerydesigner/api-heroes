import { NavLink } from "react-router-dom";

export const AccountMenu: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center ">
      <NavLink to="/login">
        <h2 className="relative">Login</h2>
      </NavLink>
    </div>
  );
};
