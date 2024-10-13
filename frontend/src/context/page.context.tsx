import { createContext, useState, useContext, ReactNode } from "react";

interface PageContextProps {
  pageCurrent: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

const PageContext = createContext<PageContextProps | undefined>(undefined);

export const PageProvider = ({ children }: { children: ReactNode }) => {
  const [pageCurrent, setPageCurrent] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setPageCurrent(page);
    }
  };

  return (
    <PageContext.Provider value={{ pageCurrent, totalPages, handlePageChange }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePage must be used within a PageProvider");
  }
  return context;
};
