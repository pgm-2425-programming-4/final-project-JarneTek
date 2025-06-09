import { API_URL, API_TOKEN } from "../constants/constants";

// Functie om een nieuwe task aan te maken
export async function createTask(taskData) {
  const headers = {
    "Content-Type": "application/json",
  };

  // Voeg API token toe als deze bestaat
  if (API_TOKEN) {
    headers.Authorization = `Bearer ${API_TOKEN}`;
  }

  const response = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers,
    body: JSON.stringify(taskData),
  });

  if (!response.ok) {
    throw new Error("Er ging iets mis bij het aanmaken van de task");
  }

  return await response.json();
}
