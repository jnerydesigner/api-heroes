import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center circle bg-red-comics border-[8px] border-slate-950 mb-2">
        <NavLink to={"/"} className="flex flex-1 justify-center items-center">
          <h3 className="text-[5.1rem] relative ">Heroes or Vilains</h3>
          <h3 className="text-[5rem] absolute top-1 text-yellow-light-comics">
            Heroes or Vilains
          </h3>
        </NavLink>
        <div className="w-64 h-32 flex justify-center items-center circle bg-yellow-light-comics text-2xl">
          <NavLink to="/create-hero">
            <h2 className="relative">Create Hero</h2>
          </NavLink>
        </div>
      </div>
    </>
  );
};
