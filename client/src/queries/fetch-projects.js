import { API_URL, API_TOKEN } from "../constants/constants";

export async function fetchProjects() {
  const headers = {};
  if (API_TOKEN) {
    headers.Authorization = `Bearer ${API_TOKEN}`;
  }

  const response = await fetch(`${API_URL}/projects`, { headers });
  if (!response.ok) {
    throw new Error(
      `Failed to fetch projects: ${response.status} ${response.statusText}`
    );
  }
  return await response.json();
}
