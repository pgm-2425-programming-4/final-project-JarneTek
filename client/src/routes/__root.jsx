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
  notFoundComponent: () => (
    <div className="not-found">
      <h1>404 - Pagina niet gevonden</h1>
      <p>De pagina die je zoekt bestaat niet.</p>
      <Link to="/" className="not-found-link">
        Ga terug naar home
      </Link>
    </div>
  ),
});
