import React from "react";
import { Link } from "@tanstack/react-router";

export default function ProjectHeader({ project, projectId }) {
  return (
    <div className="project-header">
      <h1>{project.projectName}</h1>{" "}
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
  );
}
