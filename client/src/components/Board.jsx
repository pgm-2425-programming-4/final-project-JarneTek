import React, { useState } from "react";
import Statusbox from "./Statusbox";
import TaskDetailDialog from "./TaskDetailDialog";
import TaskSearch from "./TaskSearch";
import { useStatuses } from "../hooks/useStatuses";
import { useTasks } from "../hooks/useTasks";

const Board = ({ projectId }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { statuses } = useStatuses();
  const { tasks, refreshTasks } = useTasks(projectId);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setIsDialogOpen(true);
  };
  return (
    <div>
      <TaskSearch searchText={searchText} onSearchChange={setSearchText} />
      <div className="board">
        {statuses
          .filter((status) => status.statusName !== "Backlog")
          .map((status) => (
            <Statusbox
              key={status.id}
              status={status.statusName}
              statusId={status.id}
              tasks={tasks}
              searchText={searchText}
              onTaskUpdate={refreshTasks}
              onTaskClick={handleTaskClick}
            />
          ))}
      </div>
      <TaskDetailDialog
        task={selectedTask}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
};

export default Board;
