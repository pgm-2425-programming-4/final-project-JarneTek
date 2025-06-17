import { createFileRoute, Link } from "@tanstack/react-router";
import { fetchProjectById } from "../queries/fetch-project-by-id";
import Board from "../components/Board";

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
      <div className="project-header">
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
      </div>

      <Board projectId={projectId} />
    </div>
  );
}
