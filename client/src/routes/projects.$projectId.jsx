import {
  createFileRoute,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { fetchProjectById } from "../queries/fetch-project-by-id";

export const Route = createFileRoute("/projects/$projectId")({
  loader: async ({ params }) => {
    const data = await fetchProjectById(params.projectId);
    return data.data;
  },
  component: ProjectLayout,
  notFoundComponent: () => <div>Project not found</div>,
});

function ProjectLayout() {
  const project = Route.useLoaderData();
  const { projectId } = Route.useParams();

  return (
    <div>
      <h1>{project.projectName}</h1>

      <nav className="project-nav">
        <Link
          to="/projects/$projectId"
          params={{ projectId }}
          className="nav-button"
        >
          Board
        </Link>
        <Link
          to="/projects/$projectId/backlog"
          params={{ projectId }}
          className="nav-button"
        >
          Backlog
        </Link>
      </nav>

      <Outlet />
    </div>
  );
}
