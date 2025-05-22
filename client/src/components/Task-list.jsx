export function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            {task.taskName} 
          </li>
        );
      })}
    </ul>
  );
}