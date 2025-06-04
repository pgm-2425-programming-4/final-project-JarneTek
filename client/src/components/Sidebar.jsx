import React, { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { fetchProjects } from "../queries/fetch-projects";

export default function Sidebar() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects()
      .then((data) => setProjects(data.data || []))
      .catch((error) => console.error("Failed to fetch projects:", error));
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h1 className="sidebar__title">Projects</h1>
      </div>
      <nav className="sidebar__nav">
        <ul className="project-list">
          {projects.map((project) => (
            <li key={project.documentId} className="project-list__item">
              <Link
                to="/projects/$projectId"
                params={{ projectId: project.documentId }}
                className="project-list__link"
              >
                {project.projectName}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
