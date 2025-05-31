import React from "react";
import Statusbox from "./Statusbox";

const Board = () => {
  return (
    <div className="board">
      <Statusbox status="To Do" />
      <Statusbox status="In Progress" />
      <Statusbox status="Review" />
      <Statusbox status="Done" />
    </div>
  );
};

export default Board;
