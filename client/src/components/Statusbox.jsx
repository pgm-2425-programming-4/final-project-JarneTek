import { TaskList } from "./task-list";

function Statusbox({ status, tasks }) {
  return (
    <div className="board__column">
      <h2 className="board__column-title">{status}</h2>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default Statusbox;
