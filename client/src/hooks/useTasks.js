import { useState, useEffect, useCallback } from "react";
import { fetchTasksByProject } from "../queries/fetch-tasks-by-project";

export function useTasks(projectId) {
  const [tasks, setTasks] = useState([]);

  const loadTasks = useCallback(async () => {
    if (!projectId) return;

    try {
      const tasksData = await fetchTasksByProject(projectId);
      setTasks(tasksData.data || []);
    } catch (error) {
      console.error("Error loading tasks:", error);
    }
  }, [projectId]);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const refreshTasks = () => {
    loadTasks();
  };

  return { tasks, refreshTasks };
}
