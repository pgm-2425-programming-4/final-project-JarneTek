import { createFileRoute } from "@tanstack/react-router";
import { fetchProjectById } from "../queries/fetch-project-by-id";
import Board from "../components/Board";
import ProjectHeader from "../components/ProjectHeader";

export const Route = createFileRoute("/projects/$projectId/")({
  loader: async ({ params }) => {
    const data = await fetchProjectById(params.projectId);
    return data.data;
  },
  component: ProjectBoard,
  notFoundComponent: () => <div>Project not found</div>,
});

function ProjectBoard() {
  const project = Route.useLoaderData();
  const { projectId } = Route.useParams();
  return (
    <div className="page-content-wrapper">
      <ProjectHeader project={project} projectId={projectId} />
      <Board projectId={projectId} />
    </div>
  );
}
