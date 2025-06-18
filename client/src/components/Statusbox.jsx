import { TaskList } from "./task-list";

function Statusbox({ status, statusId, tasks, searchText = "", onTaskUpdate, onTaskClick }) {
  // Filter tasks voor deze specifieke status en search text
  const statusTasks = tasks
    .filter((task) => task.categorie?.id === statusId)
    .filter((task) => task.taskName.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <div className="board__column">
      <h2 className="board__column-title">{status}</h2>
      <TaskList tasks={statusTasks} onTaskUpdate={onTaskUpdate} onTaskClick={onTaskClick} />
    </div>
  );
}

export default Statusbox;
