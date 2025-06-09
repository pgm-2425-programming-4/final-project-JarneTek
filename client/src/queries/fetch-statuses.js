import { API_URL, API_TOKEN } from "../constants/constants";

// Functie om alle statussen op te halen
export async function fetchStatuses() {
  const headers = {
    "Content-Type": "application/json",
  };

  // Voeg API token toe als deze bestaat
  if (API_TOKEN) {
    headers.Authorization = `Bearer ${API_TOKEN}`;
  }

  const response = await fetch(`${API_URL}/statuses`, {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    throw new Error("Kon statussen niet ophalen");
  }

  return await response.json();
}
