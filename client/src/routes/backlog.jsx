import { createFileRoute } from "@tanstack/react-router";
import Backlog from "../components/Backlog";

export const Route = createFileRoute("/backlog")({
  component: BacklogPage,
});

function BacklogPage() {
  return <Backlog/>;
}
