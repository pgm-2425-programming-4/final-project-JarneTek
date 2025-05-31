import { TaskList } from "./task-list";
import { useEffect, useState } from "react";
import { API_TOKEN, API_URL } from "../constants/constants";

function Statusbox({ status }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/tasks`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    })
      .then((data) => data.json())
      .then((jsonData) => {
        setTasks(jsonData.data);
      });
  }, [status]);

  return (
    <div className="board__column">
      <h2 className="board__column-title"> {status}</h2>
      <div className="task-list">
        <div className="task-card">
          <h3 className="task-card__title">
            <TaskList tasks={tasks} />
          </h3>
          <div className="task-card__tags">
            <span className="tag tag--infra">Infra</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statusbox;
