import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export const RootLayout: React.FC = () => {
  return (
    <>
      <div className="container mx-auto bg-slate-900">
        <Header />
        <Outlet />
      </div>
    </>
  );
};
