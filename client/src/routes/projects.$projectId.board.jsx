import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/$projectId/board')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/projects/$projectId/board"!</div>
}
