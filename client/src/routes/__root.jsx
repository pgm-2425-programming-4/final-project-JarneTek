import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Sidebar from "../components/Sidebar";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main">
        <header className="header">
          <div className="header__content">
            <div className="search">
              <input
                type="search"
                placeholder="Search tasks..."
                className="search__input"
              />
            </div>
            <nav className="p-2 flex gap-2">
              <Link to="/" className="[&.active]:font-bold page-nav-button">
                Board
              </Link>
              <Link
                to="/backlog"
                className="[&.active]:font-bold page-nav-button"
              >
                Backlog
              </Link>
            </nav>
            <div className="header__actions">
              <button className="button button--secondary">Add Task</button>
              <button className="button button--primary">New Project</button>
            </div>
          </div>
        </header>

        <div className="page-content">
          <Outlet />
        </div>
      </main>

      <TanStackRouterDevtools />
    </div>
  );
}
