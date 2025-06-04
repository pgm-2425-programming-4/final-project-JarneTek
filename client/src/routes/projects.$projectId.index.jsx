import { createFileRoute } from "@tanstack/react-router";
import { fetchTasksByProject } from "../queries/fetch-tasks-by-project";
import Board from "../components/Board";

export const Route = createFileRoute("/projects/$projectId/")({
  loader: ({ params }) => {
    return fetchTasksByProject(params.projectId);
  },
  component: ProjectBoard,
});

function ProjectBoard() {
  const tasksData = Route.useLoaderData();
  const tasks = tasksData.data || [];

  return <Board tasks={tasks} />;
}
