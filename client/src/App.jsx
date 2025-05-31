import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Board from "./components/Board";
import Backlog from "./components/Backlog";
import PageNavigation from "./components/PageNavigation";

function App() {
  return (
    <Router>
      <div className="app">
        <aside className="sidebar">
          <div className="sidebar__header">
            <h1 className="sidebar__title">Project Dashboard</h1>
          </div>
          <nav>
            <ul className="project-list">
              <li className="project-list__item project-list__item--active">
                <a href="#" className="project-list__link">
                  Current Project
                </a>
              </li>
            </ul>
          </nav>
        </aside>

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
              <div className="header__actions">
                <button className="button button--secondary">Add Task</button>
                <button className="button button--primary">New Project</button>
              </div>
            </div>
          </header>

          <div className="page-content">
            <div style={{ padding: "2rem 2rem 0 2rem" }}>
              <PageNavigation />
            </div>

            <Routes>
              <Route path="/" element={<Board />} />
              <Route path="/backlog" element={<Backlog />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
