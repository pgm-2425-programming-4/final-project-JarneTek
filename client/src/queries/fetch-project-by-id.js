import { API_URL } from "../constants/constants";

export async function fetchProjectById(projectId) {
  const response = await fetch(`${API_URL}/api/projects/${projectId}`);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch project with id ${projectId}: ${response.status} ${response.statusText}`
    );
  }
  return await response.json();
}
