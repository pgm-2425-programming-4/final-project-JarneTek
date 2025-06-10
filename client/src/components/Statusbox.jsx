import { TaskList } from "./task-list";

function Statusbox({ status, tasks, onTaskUpdate }) {
  return (
    <div className="board__column">
      <h2 className="board__column-title">{status}</h2>
      <TaskList tasks={tasks} onTaskUpdate={onTaskUpdate} />
    </div>
  );
}

export default Statusbox;
