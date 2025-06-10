import { API_URL, API_TOKEN } from "../constants/constants";

export async function updateStatus(documentId, data) {
  const headers = {
    "Content-Type": "application/json",
  };

  if (API_TOKEN) {
    headers.Authorization = `Bearer ${API_TOKEN}`;
  }

  const response = await fetch(`${API_URL}/tasks/${documentId}`,{
    method: "PUT", 
    headers, 
    body: JSON.stringify(data)
  })

  if (!response.ok){
    throw new Error('er is iets fout gegaan tijdens het updaten van de task. ')
  }
  else{
    return await response.json()
  }
}
