import React, { useEffect, useState, useCallback } from "react";
import Statusbox from "./Statusbox";
import { API_URL, API_TOKEN } from "../constants/constants";
import { fetchTasksByProject } from "../queries/fetch-tasks-by-project";

const Board = ({ projectId }) => {
  const [statuses, setStatuses] = useState([]);
  const [tasks, setTasks] = useState([]);

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
    <div className="board">
      {statuses
        .filter((status) => status.statusName !== "Backlog")
        .map((status) => (
          <Statusbox
            key={status.id}
            status={status.statusName}
            statusId={status.id}
            tasks={tasks.filter((task) => task.categorie?.id === status.id) || []}
            onTaskUpdate={loadTasks}
          />
        ))}
    </div>
  );
};

export default Board;
