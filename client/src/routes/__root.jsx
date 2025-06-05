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
            <div className="search-container">
              <input type="text" placeholder="Search tasks..." className="search-input" />
            </div>
            <nav className="top-nav">
              <ul className="nav-list">
                <li className="nav-list__item">
                  <button className="nav-list__button">Add Task</button>
                </li>
                <li className="nav-list__item">
                  <button className="nav-list__button">New Project</button>
                </li>
              </ul>
            </nav>
          </header>
          <Outlet />
        </main>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
