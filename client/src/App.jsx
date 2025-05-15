import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <Sidebar />
      </aside>

      <main className="main">
        <header className="header">
          <div className="header__content">
            <div className="search">
              <input
                type="text"
                className="search__input"
                placeholder="Search tasks..."
              />
            </div>
            <div className="header__actions">
              <button className="button button--primary">Add new task</button>
              <button className="button button--secondary">View backlog</button>
            </div>
          </div>
        </header>

        <div className="board">
          <div className="board__column">
            <h2 className="board__column-title">To do</h2>
            <div className="task-list">
              <div className="task-card">
                <h3 className="task-card__title">
                  Create pipeline with Github Actions
                </h3>
                <div className="task-card__tags">
                  <span className="tag tag--infra">Infra</span>
                </div>
              </div>
            </div>
          </div>

          <div className="board__column">
            <h2 className="board__column-title">In progress</h2>
            <div className="task-list">
              <div className="task-card">
                <h3 className="task-card__title">Set up Strapi on Render</h3>
                <div className="task-card__tags">
                  <span className="tag tag--infra">Infra</span>
                  <span className="tag tag--backend">Back-end</span>
                </div>
              </div>
            </div>
          </div>

          <div className="board__column">
            <h2 className="board__column-title">Ready for review</h2>
            <div className="task-list">
              <div className="task-card">
                <h3 className="task-card__title">
                  Add formatting with Prettier
                </h3>
                <div className="task-card__tags">
                  <span className="tag tag--frontend">Front-end</span>
                </div>
              </div>
            </div>
          </div>

          <div className="board__column">
            <h2 className="board__column-title">Done</h2>
            <div className="task-list">
              <div className="task-card">
                <h3 className="task-card__title">Initialize Git repository</h3>
                <div className="task-card__tags">
                  <span className="tag tag--infra">Infra</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
