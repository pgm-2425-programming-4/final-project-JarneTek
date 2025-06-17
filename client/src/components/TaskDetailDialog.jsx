import React from "react";

export default function TaskDetailDialog({ task, isOpen, onClose }) {
  // Als de dialog niet open is of er is geen task, toon niets
  if (!isOpen || !task) {
    return null;
  }

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        <h2>Task Details</h2>

        <div className="task-detail-section">
          <h3>Task Naam</h3>
          <p>{task.taskName}</p>
        </div>

        <div className="task-detail-section">
          <h3>Beschrijving</h3>
          <p>{task.Description || "Geen beschrijving beschikbaar"}</p>
        </div>

        <div className="task-detail-section">
          <h3>Project</h3>
          <p>{task.project?.projectName || "Niet gekoppeld"}</p>
        </div>

        <div className="task-detail-section">
          <h3>Status</h3>
          <p>{task.categorie?.statusName || "Geen status"}</p>
        </div>

        {task.Labels && (
          <div className="task-detail-section">
            <h3>Label</h3>
            <p>{task.Labels}</p>
          </div>
        )}
      </div>
    </div>
  );
}
