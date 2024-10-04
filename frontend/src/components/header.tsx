import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <>
      <NavLink
        to={"/"}
        className="w-full flex justify-center items-center circle bg-red-comics border-[8px] border-slate-950 mb-2"
      >
        <h3 className="text-[5.1rem] relative ">Heroes or Vilains</h3>
        <h3 className="text-[5rem] absolute top-1 text-yellow-light-comics">
          Heroes or Vilains
        </h3>
      </NavLink>
    </>
  );
};
