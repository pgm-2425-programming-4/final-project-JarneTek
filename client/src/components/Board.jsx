import React, { useEffect, useState } from "react";
import Statusbox from "./Statusbox";
import { API_URL, API_TOKEN } from "../constants/constants";

const Board = ({ tasks = [] }) => {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    const headers = {};
    if (API_TOKEN) {
      headers.Authorization = `Bearer ${API_TOKEN}`;
    }

    fetch(`${API_URL}/statuses`, { headers })
      .then((response) => response.json())
      .then((data) => setStatuses(data.data || []));
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
            tasks={
              tasks.filter((task) => task.categorie?.id === status.id) || []
            }
          />
        ))}
    </div>
  );
};

export default Board;
