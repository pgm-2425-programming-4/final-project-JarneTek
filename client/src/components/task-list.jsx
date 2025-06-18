import React, { useState, useEffect } from "react";
import { updateStatus } from "../queries/update-task";
import { fetchStatuses } from "../queries/fetch-statuses";

export function TaskList({ tasks, onTaskUpdate, onTaskClick }) {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    fetchStatuses().then((status) => {
      setStatuses(status.data);
    });
  }, []);

  const handleStatusChange = async (taskDocumentId, newStatusId) => {
    try {
      const taskData = {
        data: {
          categorie: parseInt(newStatusId),
        },
      };
      await updateStatus(taskDocumentId, taskData);
      if (onTaskUpdate) {
        onTaskUpdate();
      }
    } catch {
      alert("Er ging iets mis bij het updaten van de task status.");
    }
  };

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
          <td>
            <strong>Status</strong>
          </td>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr
            key={task.id}
            onClick={() => onTaskClick && onTaskClick(task)}
            style={{ cursor: "pointer" }}
          >
            <td>{task.taskName}</td>
            <td>{task.Labels && <span className="tag">{task.Labels}</span>}</td>
            <td>
              <select
                value={task.categorie?.id || ""}
                onChange={(e) => handleStatusChange(task.documentId, e.target.value)}
                onClick={(e) => e.stopPropagation()}
              >
                <option value="">-- Kies status --</option>
                {statuses.map((status) => (
                  <option key={status.id} value={status.id}>
                    {status.statusName}
                  </option>
                ))}
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
