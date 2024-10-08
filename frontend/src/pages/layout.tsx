import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export const RootLayout: React.FC = () => {
  return (
    <>
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-hero">
        <header className="sticky top-0 z-50">
          <Header />
        </header>

        <main className="container mx-auto p-4">
          <Outlet />
        </main>

        <footer className="fixed bottom-0 left-0 right-0">
          <Footer />
        </footer>
      </div>
    </>
  );
};
