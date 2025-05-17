import Sidebar from "./components/Sidebar";
import Statusbox from "./components/Statusbox";

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
          <Statusbox status={"To-do"} />

          <Statusbox status={"Backlog"} />

          <Statusbox status={"Done"} />

          <Statusbox status={"Ready for review"} />
        </div>
      </main>
    </div>
  );
}

export default App;
