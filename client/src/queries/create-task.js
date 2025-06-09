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

  console.log("Sending request to:", `${API_URL}/tasks`);
  console.log("Request headers:", headers);
  console.log("Request body:", JSON.stringify(taskData, null, 2));  const response = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers,
    body: JSON.stringify(taskData),
  });if (!response.ok) {
    let errorData;
    try {
      errorData = await response.json();
    } catch {
      errorData = await response.text();
    }
    console.error("API Error Response:", errorData);
    console.error("Response status:", response.status);
    console.error("Response headers:", [...response.headers.entries()]);
    console.error("Request body that failed:", taskData);
    throw new Error(`Er ging iets mis bij het aanmaken van de task: ${response.status} - ${JSON.stringify(errorData)}`);
  }

  return await response.json();
}
