import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { fetchProjectById } from "../queries/fetch-project-by-id";
import { TaskList } from "../components/task-list";
import TaskDetailDialog from "../components/TaskDetailDialog";
import TaskSearch from "../components/TaskSearch";
import Pagination from "../components/Pagination";
import ProjectHeader from "../components/ProjectHeader";
import { useBacklogTasks } from "../hooks/useBacklogTasks";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchText, setSearchText] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { tasks: backlogTasks, refreshTasks } = useBacklogTasks(projectId);

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
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredBacklogTasks.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentTasks = filteredBacklogTasks.slice(startIndex, startIndex + pageSize);
  return (
    <div className="page-content-wrapper">
      <ProjectHeader project={project} projectId={projectId} />
      <TaskSearch searchText={searchText} onSearchChange={setSearchText} />
      <div className="backlog-content">
        <div className="board__column">
          <h2 className="board__column-title">Backlog</h2>
          <TaskList
            tasks={currentTasks}
            onTaskUpdate={refreshTasks}
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
      </div>
      <TaskDetailDialog
        task={selectedTask}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
}
