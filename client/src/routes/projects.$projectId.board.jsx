import { createFileRoute } from "@tanstack/react-router";
import { fetchTasksByProject } from "../queries/fetch-tasks-by-project";
import Board from "../components/Board";

export const Route = createFileRoute("/projects/$projectId/board")({
  loader: ({ params }) => fetchTasksByProject(params.projectId),
  component: RouteComponent,
});

function RouteComponent() {
  const tasksData = Route.useLoaderData();
  const tasks = tasksData.data || [];

  return (
    <div className="project-detail">
      <Board tasks={tasks} />
    </div>
  );
}
