import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { fetchBacklogTasksByProject } from "../queries/fetch-backlog-tasks-by-project";
import { TaskList } from "../components/task-list";

export const Route = createFileRoute("/projects/$projectId/backlog")({
  loader: ({ params }) => {
    return fetchBacklogTasksByProject(params.projectId);
  },
  component: ProjectBacklog,
});

function ProjectBacklog() {
  const backlogData = Route.useLoaderData();
  const backlogTasks = backlogData.data || [];

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const totalPages = Math.ceil(backlogTasks.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentTasks = backlogTasks.slice(startIndex, startIndex + pageSize);

  return (
    <div className="backlog-page">
      <div className="backlog-content">
        <div className="board__column">
          <h2 className="board__column-title">Backlog</h2>

          <div>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              <option value={5}>5 per pagina</option>
              <option value={10}>10 per pagina</option>
              <option value={25}>25 per pagina</option>
            </select>
          </div>

          <TaskList tasks={currentTasks} />

          {totalPages > 1 && (
            <div>
              <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                Vorige
              </button>
              <span>
                {" "}
                Pagina {currentPage} van {totalPages}{" "}
              </span>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Volgende
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
