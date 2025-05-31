import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PageNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="page-navigation">
      <button
        className={`page-nav-button ${location.pathname === "/" ? "page-nav-button--active" : ""}`}
        onClick={() => navigate("/")}
      ></button>
    </div>
  );
};

export default PageNavigation;
