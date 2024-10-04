import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PageProvider } from "./context/page.context.tsx";
import { HomePage } from "./pages/home.page.tsx";
import { DetailsPage } from "./pages/details.page.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/hero/:id",
    element: <DetailsPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PageProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        {/* <App /> */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </PageProvider>
  </StrictMode>
);
