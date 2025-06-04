import { API_URL } from "../constants/constants";

export async function fetchBacklogTasksByProject(projectId) {
  const response = await fetch(
    `${API_URL}/tasks?populate=categorie&populate=project&filters[project][documentId][$eq]=${projectId}&filters[categorie][statusName][$eq]=Backlog`
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch backlog tasks for project ${projectId}: ${response.status} ${response.statusText}`
    );
  }
  return await response.json();
}