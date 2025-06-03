import React, { useEffect, useState } from "react";
import Statusbox from "./Statusbox";
import { API_URL, API_TOKEN } from "../constants/constants";

const Board = () => {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    const fetchOptions = import.meta.env.PROD
      ? { headers: { Authorization: `Bearer ${API_TOKEN}` } }
      : {};
      
    fetch(`${API_URL}/statuses`, fetchOptions)
      .then(response => response.json())
      .then(data => {
        setStatuses(data.data || []);
      })
      .catch(err => {
        console.error("Error fetching statuses:", err);
      });
  }, []);

  return (
    <div className="board">
      {statuses
        .filter((status) => status.statusName !== "Backlog")
        .map((status) => (
          <Statusbox
            key={status.id}
            status={status.statusName}
            statusId={status.id}
          />
        ))}
    </div>
  );
};

export default Board;
