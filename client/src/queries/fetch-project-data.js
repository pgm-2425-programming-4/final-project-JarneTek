import { API_URL, API_TOKEN } from "../constants/constants";

export const fetchProjectData = async (projectId) => {
  const headers = {
    "Content-Type": "application/json",
  };

  if (API_TOKEN) {
    headers.Authorization = `Bearer ${API_TOKEN}`;
  }

  const response = await fetch(`${API_URL}/api/projects/${projectId}?populate=*`, {
    method: "GET",
    headers,
  });

  const data = await response.json();
  return data;
};
