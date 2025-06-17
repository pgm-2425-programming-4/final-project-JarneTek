import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Sidebar from "../components/Sidebar";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="app">
        <Sidebar />
        <main className="main-content">
          <header className="header">
            <h2>Task Management System</h2>
          </header>
          <Outlet />
        </main>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
