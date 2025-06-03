export function TaskList({ tasks }) {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="task-list-empty">
        <p>Geen taken beschikbaar.</p>
      </div>
    );
  }

  return (
    <table className="task-table">
      <thead>
        <tr>
          <td>
            <strong>Task Name</strong>
          </td>
          <td>
            <strong>Label</strong>
          </td>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.taskName}</td>
            <td>{task.Labels && <span className="tag">{task.Labels}</span>}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
