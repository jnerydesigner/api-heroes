import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export const RootLayout: React.FC = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-hero">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};
