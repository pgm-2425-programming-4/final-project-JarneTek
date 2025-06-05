import { createFileRoute } from "@tanstack/react-router";
import { fetchBacklogTasksByProject } from "../queries/fetch-backlog-tasks-by-project";
import Statusbox from "../components/Statusbox";

export const Route = createFileRoute("/projects/$projectId/backlog")({
  loader: ({ params }) => {
    return fetchBacklogTasksByProject(params.projectId);
  },
  component: ProjectBacklog,
});

function ProjectBacklog() {
  const backlogData = Route.useLoaderData();
  const backlogTasks = backlogData.data || [];

  return (
    <div className="backlog-container">
      <Statusbox status="Backlog" statusId={null} tasks={backlogTasks} />
    </div>
  );
}
