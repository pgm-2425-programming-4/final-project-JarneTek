import { API_URL, API_TOKEN } from "../constants/constants";

export async function createTask(taskData) {
  const headers = {
    "Content-Type": "application/json",
  };

  if (API_TOKEN) {
    headers.Authorization = `Bearer ${API_TOKEN}`;
  }

  const response = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers,
    body: JSON.stringify(taskData),
  });

  if (!response.ok) {
    throw new Error(`Er ging iets mis bij het aanmaken van de task: ${response.status}`);
  }

  return await response.json();
}
