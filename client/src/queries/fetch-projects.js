import { API_URL } from "../constants/constants";

export async function fetchProjects() {
  const response = await fetch(`${API_URL}/api/projects`);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch projects: ${response.status} ${response.statusText}`
    );
  }
  return await response.json();
}
