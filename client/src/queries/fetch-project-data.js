import { API_URL, API_TOKEN } from "../constants/constants";

export const fetchProjectData = async (projectId) => {
  const headers = {};

  if (API_TOKEN) {
    headers.Authorization = `Bearer ${API_TOKEN}`;
  }
  const response = await fetch(`${API_URL}/api/projects/${projectId}?populate=*`);

  const data = await response.json();
  return data;
};
