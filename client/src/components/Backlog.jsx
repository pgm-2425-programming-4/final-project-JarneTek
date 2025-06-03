import React, { useState, useEffect } from "react";
import { API_TOKEN, API_URL, PAGE_SIZE_OPTIONS } from "../constants/constants";
import { TaskList } from "./task-list";
import { Pagination } from "./pagination/pagination";

const Backlog = () => {
  const [pageSize, setPageSize] = useState(PAGE_SIZE_OPTIONS[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tasks, setTasks] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  function handlePageSizeChange(event) {
    setPageSize(Number(event.target.value));
    setCurrentPage(1);
  }

  function handlePageChanged(pageNumber) {
    setCurrentPage(pageNumber);
  }
  useEffect(() => {
    const url = `${API_URL}/tasks?populate=categorie&filters[categorie][statusName][$eq]=Backlog&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`;

    fetch(url, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    })
      .then((data) => data.json())
      .then((jsonData) => {
        setTasks(jsonData.data || []);
        setPageCount(jsonData.meta?.pagination?.pageCount || 1);
      });
  }, [currentPage, pageSize]);

  return (
    <div className="backlog-page">
      <div className="backlog-content">
        {" "}
        <h2>Backlog</h2>
        <TaskList tasks={tasks} />
        <div className="page-size-selector">
          <select value={pageSize} onChange={handlePageSizeChange}>
            {PAGE_SIZE_OPTIONS.map((size) => (
              <option key={size} value={size}>
                {size} per page
              </option>
            ))}
          </select>
        </div>
        <Pagination
          currentPage={currentPage}
          pageCount={pageCount}
          onPageChanged={handlePageChanged}
        />
      </div>
    </div>
  );
};

export default Backlog;
