import { Pagination } from "./pagination/pagination";
import { TaskList } from "./task-list";
import { useEffect, useState } from "react";
import { API_TOKEN, API_URL } from "../constants/constants";

function Statusbox({ status }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [tasks, setTasks] = useState([]);
  
  function handlePageChanged(pageNumber) {
    setCurrentPage(pageNumber);
  }
  

    useEffect(() => {
    fetch(
      `${API_URL}/tasks?pagination[pageSize]=5&pagination[page]=${currentPage}`,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      }
    )
      .then((data) => data.json())
      .then((jsonData) => {
        setTasks(jsonData.data);
      });
  }, [currentPage]);

    const pageCount = 86;
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
          <Pagination
            currentPage={currentPage}
            pageCount={pageCount}
            onPageChanged={handlePageChanged}
          />
        </div>
      </div>
    </div>
  );
}

export default Statusbox;