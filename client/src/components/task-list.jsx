export function TaskList({ tasks }) {
  return (
    <table className="task-table">
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.taskName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}