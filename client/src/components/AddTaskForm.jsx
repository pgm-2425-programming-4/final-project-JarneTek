import React, { useState, useEffect } from "react";
import { createTask } from "../queries/create-task";
import { fetchProjects } from "../queries/fetch-projects";
import { fetchStatuses } from "../queries/fetch-statuses";

export default function AddTaskForm() {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState("");
  const [statuses, setStatuses] = useState([]);
  const [selectedStatusId, setSelectedStatusId] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");

  useEffect(() => {
    fetchProjects().then((project) => {
      setProjects(project.data), console.log(project);
    });
    fetchStatuses().then((status) => {
      setStatuses(status.data), console.log(status);
    });
  }, []);  function handleSubmit(e) {
    e.preventDefault();
    
    if (!taskName) {
      alert("Taskname is needed");
      return;
    }

    // Prepare task data, only include fields that have values
    const taskData = {
      data: {
        taskName: taskName,
      }
    };

    // Add project only if selected (to test if this is causing the issue)
    if (selectedProjectId) {
      taskData.data.project = parseInt(selectedProjectId);
    }

    // Add optional fields only if they have values
    if (description) {
      taskData.data.Description = description;
    }
    
    if (selectedStatusId) {
      taskData.data.categorie = parseInt(selectedStatusId);
    }
    
    if (selectedLabel) {
      taskData.data.Labels = selectedLabel;
    }

    console.log("Submitting task data:", taskData);

    createTask(taskData)
      .then((response) => {
        console.log("Taak succesvol aangemaakt:", response);
        setTaskName("");
        setDescription("");
        setSelectedProjectId("");
        setSelectedStatusId("");
        setSelectedLabel("");
      })
      .catch((error) => {
        console.error("Fout bij het aanmaken van de taak:", error);
        alert("Er ging iets mis bij het aanmaken van de taak.");
      });
  }

  return (
    <div>
      <h2>Nieuwe Taak Toevoegen</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Taak Naam:</label>
          <input
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
            type="text"
            placeholder="Bijv: Website bugs fixen"
            required
          />
        </div>
        <div>
          <label>Beschrijving:</label>
          <textarea
            placeholder="Meer details over de taak... (optioneel)"
            rows="3"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>{" "}
        <div>
          <label>Project:</label>
          <select
            value={selectedProjectId}
            onChange={(e) => setSelectedProjectId(e.target.value)}
          >
            <option value="">-- Selecteer een project --</option>
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.projectName}
              </option>
            ))}
          </select>
        </div>{" "}
        <div>
          <label>Status:</label>
          <select
            value={selectedStatusId}
            onChange={(e) => setSelectedStatusId(e.target.value)}
          >
            <option value="">-- Selecteer een status --</option>
            {statuses.map((status) => (
              <option key={status.id} value={status.id}>
                {status.statusName}
              </option>
            ))}
          </select>
        </div>{" "}
        {/* Label - optioneel */}
        <div>
          <label>Label:</label>
          <select
            value={selectedLabel}
            onChange={(e) => setSelectedLabel(e.target.value)}
          >
            <option value="">-- Kies een label (optioneel) --</option>
            <option value="Infra">Infra</option>
            <option value="Documentation">Documentatie</option>
            <option value="Back-end">Back-end</option>
          </select>
        </div>{" "}
        <button type="submit">Taak Aanmaken</button>
      </form>
    </div>
  );
}
