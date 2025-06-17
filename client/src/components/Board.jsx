import React, { useEffect, useState, useCallback } from "react";
import Statusbox from "./Statusbox";
import TaskDetailDialog from "./TaskDetailDialog";
import { API_URL, API_TOKEN } from "../constants/constants";
import { fetchTasksByProject } from "../queries/fetch-tasks-by-project";

const Board = ({ projectId }) => {
  const [statuses, setStatuses] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredTasks = tasks.filter((task) =>
    task.taskName.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setIsDialogOpen(true);
  };

  const loadTasks = useCallback(async () => {
    try {
      const tasksData = await fetchTasksByProject(projectId);
      setTasks(tasksData.data || []);
    } catch {
      // Error handling
    }
  }, [projectId]);

  useEffect(() => {
    const headers = {};
    if (API_TOKEN) {
      headers.Authorization = `Bearer ${API_TOKEN}`;
    }

    fetch(`${API_URL}/statuses`, { headers })
      .then((response) => response.json())
      .then((data) => setStatuses(data.data || []));
    loadTasks();
  }, [projectId, loadTasks]);
  return (
    <div>
      <div className="task-search-container">
        <input
          className="task-search-input"
          type="text"
          placeholder="Zoek taken op naam..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="board">
        {statuses
          .filter((status) => status.statusName !== "Backlog")
          .map((status) => (
            <Statusbox
              key={status.id}
              status={status.statusName}
              statusId={status.id}
              tasks={filteredTasks.filter((task) => task.categorie?.id === status.id) || []}
              onTaskUpdate={loadTasks}
              onTaskClick={handleTaskClick}
            />
          ))}
      </div>{" "}
      <TaskDetailDialog
        task={selectedTask}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
};

export default Board;
