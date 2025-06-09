import { API_URL, API_TOKEN } from "../constants/constants";

export async function fetchAllTasks() {
  const headers = {};
  if (API_TOKEN) {
    headers.Authorization = `Bearer ${API_TOKEN}`;
  }

  const response = await fetch(`${API_URL}/tasks?populate=*`, { headers });
  if (!response.ok) {
    throw new Error(
      `Failed to fetch all tasks: ${response.status} ${response.statusText}`,
    );
  }
  return await response.json();
}
