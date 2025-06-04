import { API_URL } from "../constants/constants";

export async function fetchTasksByProject(projectId) {
  const response = await fetch(
    `${API_URL}/tasks?populate=categorie&populate=project&filters[project][documentId][$eq]=${projectId}`
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch tasks for project ${projectId}: ${response.status} ${response.statusText}`
    );
  }
  return await response.json();
}
