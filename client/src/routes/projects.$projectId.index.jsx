import { createFileRoute } from "@tanstack/react-router";
import Board from "../components/Board";

export const Route = createFileRoute("/projects/$projectId/")({
  component: ProjectBoard,
});

function ProjectBoard() {
  const { projectId } = Route.useParams();

  return <Board projectId={projectId} />;
}
