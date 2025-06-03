import { TaskList } from "./task-list";
import { useEffect, useState } from "react";
import { API_TOKEN, API_URL } from "../constants/constants";

function Statusbox({ status, statusId }) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const url = `${API_URL}/tasks?populate=categorie&filters[categorie][id][$eq]=${statusId}`;

    fetch(url, {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    })
      .then((response) => response.json())
      .then((data) => setTasks(data.data));
  }, [statusId]);
  return (
    <div className="board__column">
      <h2 className="board__column-title">{status}</h2>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default Statusbox;
