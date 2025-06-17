import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { fetchBacklogTasksByProject } from "../queries/fetch-backlog-tasks-by-project";
import { fetchProjectById } from "../queries/fetch-project-by-id";
import { TaskList } from "../components/task-list";
import TaskDetailDialog from "../components/TaskDetailDialog";
import Pagination from "../components/Pagination";

export const Route = createFileRoute("/projects/$projectId/backlog")({
  loader: async ({ params }) => {
    const data = await fetchProjectById(params.projectId);
    return data.data;
  },
  component: ProjectBacklog,
});

function ProjectBacklog() {
  const project = Route.useLoaderData();
  const { projectId } = Route.useParams();
  const [backlogTasks, setBacklogTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchText, setSearchText] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredBacklogTasks = backlogTasks.filter((task) =>
    task.taskName.toLowerCase().includes(searchText.toLowerCase())
  );
  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setIsDialogOpen(true);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
    setCurrentPage(1); // Reset to first page when changing page size
  };

  const loadBacklogTasks = useCallback(async () => {
    try {
      const backlogData = await fetchBacklogTasksByProject(projectId);
      setBacklogTasks(backlogData.data || []);
    } catch {
      // Error handling
    }
  }, [projectId]);
  useEffect(() => {
    loadBacklogTasks();
  }, [projectId, loadBacklogTasks]);
  const totalPages = Math.ceil(backlogTasks.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentTasks = filteredBacklogTasks.slice(startIndex, startIndex + pageSize);

  return (
    <div className="backlog-page">
      <h1>{project.projectName}</h1>
      <nav className="project-nav">
        <Link to="/projects/$projectId" params={{ projectId }} className="nav-button">
          Board
        </Link>
        <Link to="/projects/$projectId/backlog" params={{ projectId }} className="nav-button">
          Backlog
        </Link>
        <Link to="/" className="nav-button nav-button--primary">
          + Nieuwe Task
        </Link>
      </nav>
      <div className="task-search-container">
        <input
          className="task-search-input"
          type="text"
          placeholder="Zoek taken op naam..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="backlog-content">
        <div className="board__column">
          <h2 className="board__column-title">Backlog</h2>

          <TaskList
            tasks={currentTasks}
            onTaskUpdate={loadBacklogTasks}
            onTaskClick={handleTaskClick}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            onPageSizeChange={handlePageSizeChange}
          />
        </div>
      </div>{" "}
      <TaskDetailDialog
        task={selectedTask}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
}
