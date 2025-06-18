import { useState, useEffect } from "react";
import { API_URL, API_TOKEN } from "../constants/constants";

export function useStatuses() {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    const fetchStatuses = async () => {
      try {
        const headers = {};
        if (API_TOKEN) {
          headers.Authorization = `Bearer ${API_TOKEN}`;
        }

        const response = await fetch(`${API_URL}/statuses`, { headers });
        const data = await response.json();
        setStatuses(data.data || []);
      } catch (error) {
        console.error("Error fetching statuses:", error);
      }
    };

    fetchStatuses();
  }, []);

  return { statuses };
}
