import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PageProvider } from "./context/page.context.tsx";
import { HomePage } from "./pages/home.page.tsx";
import { DetailsPage } from "./pages/details.page.tsx";
import { CreatePage } from "./pages/create.page.tsx";
import { RootLayout } from "./pages/layout.tsx";
import { LoginPage } from "./pages/login.page.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/hero/:id",
        element: <DetailsPage />,
      },
      {
        path: "/create-hero",
        element: <CreatePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
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
