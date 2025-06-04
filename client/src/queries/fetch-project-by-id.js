import { API_URL, API_TOKEN } from "../constants/constants";

export async function fetchProjectById(projectId) {
  const headers = {};
  if (API_TOKEN) {
    headers.Authorization = `Bearer ${API_TOKEN}`;
  }

  const response = await fetch(`${API_URL}/projects/${projectId}`, { headers });
  if (!response.ok) {
    throw new Error(
      `Failed to fetch project with id ${projectId}: ${response.status} ${response.statusText}`
    );
  }
  return await response.json();
}
