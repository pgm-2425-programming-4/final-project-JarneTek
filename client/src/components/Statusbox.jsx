import { Pagination } from "./pagination/pagination";
import { TaskList } from "./task-list";
import { useEffect, useState } from "react";
import { API_TOKEN, API_URL, PAGE_SIZE_OPTIONS } from "../constants/constants";

function Statusbox({ status }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE_OPTIONS[0]); 
  const [tasks, setTasks] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  function handlePageChanged(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function handlePageSizeChange(event) {
    setPageSize(Number(event.target.value));
    setCurrentPage(1); 
  }

  useEffect(() => {
    fetch(
      `${API_URL}/tasks?filters[categorie][statusName][$eq]=${status}&pagination[pageSize]=${pageSize}&pagination[page]=${currentPage}`,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      }
    )
      .then((data) => data.json())
      .then((jsonData) => {
        setTasks(jsonData.data);
        setPageCount(jsonData.meta.pagination.pageCount);
      });
  }, [currentPage, status, pageSize]);


  return (
    <div className="board__column">
      <h2 className="board__column-title"> {status}</h2>
      <div className="task-list">
        <div className="task-card">
          <h3 className="task-card__title">
            <TaskList tasks={tasks} />
          </h3>
          <div className="page-size-selector">
            <select value={pageSize} onChange={handlePageSizeChange}>
              {PAGE_SIZE_OPTIONS.map((size) => (
                <option key={size} value={size}>
                  {size} per page
                </option>
              ))}
            </select>
          </div>
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
