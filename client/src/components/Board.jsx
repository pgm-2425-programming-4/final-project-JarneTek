import React, { useEffect, useState } from "react";
import Statusbox from "./Statusbox";
import { API_TOKEN, API_URL } from "../constants/constants";

const Board = () => {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/statuses`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setStatuses(data.data));
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
