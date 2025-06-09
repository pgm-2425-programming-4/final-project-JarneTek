import { API_URL, API_TOKEN } from "../constants/constants";

export async function fetchTasksByProject(projectId) {
  const headers = {};
  if (API_TOKEN) {
    headers.Authorization = `Bearer ${API_TOKEN}`;
  }

  const response = await fetch(
    `${API_URL}/tasks?populate=categorie&populate=project&filters[project][documentId][$eq]=${projectId}`,
    { headers },
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch tasks for project ${projectId}: ${response.status} ${response.statusText}`,
    );
  }
  return await response.json();
}
