import { TaskList } from "./task-list";
import { useEffect, useState } from "react";
import { API_URL, API_TOKEN } from "../constants/constants";

function Statusbox({ status, statusId }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const url = `${API_URL}/tasks?populate=categorie&filters[categorie][id][$eq]=${statusId}`;
    
    const fetchOptions = { headers: { Authorization: `Bearer ${API_TOKEN}` } };
      
    fetch(url, fetchOptions)
      .then(response => response.json())
      .then(data => {
        setTasks(data.data || []);
      })
      .catch(err => {
        console.error(`Error fetching tasks for ${status}:`, err);
      });
  }, [statusId, status]);

  return (
    <div className="board__column">
      <h2 className="board__column-title">{status}</h2>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default Statusbox;
