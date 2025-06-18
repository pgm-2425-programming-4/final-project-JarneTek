import { useState, useEffect, useCallback } from "react";
import { fetchBacklogTasksByProject } from "../queries/fetch-backlog-tasks-by-project";

export function useBacklogTasks(projectId) {
  const [tasks, setTasks] = useState([]);

  const loadTasks = useCallback(async () => {
    if (!projectId) return;

    try {
      const tasksData = await fetchBacklogTasksByProject(projectId);
      setTasks(tasksData.data || []);
    } catch (error) {
      console.error("Error loading backlog tasks:", error);
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
