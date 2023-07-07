import React, { useState } from "react";
import { projects } from "../data/projectData";

export const ProjectsTab = ({ setProjects }) => {
  const [activeClass, setActiveClass] = useState("all");

  const filterProjects = (x) => {
    if (x === "all") {
      setActiveClass("all");
      setProjects(projects);
    } else if (x === "web") {
      setActiveClass("web");
      setProjects(projects.filter((proj) => proj.cat === "web"));
    } else if (x === "game") {
      setActiveClass("game");
      setProjects(projects.filter((proj) => proj.cat === "game"));
    }
  };

  return (
    <div className="flex itmes-center gap-8 w-full  border-b mb-8">
      <h6
        className={` p-1 cursor-pointer ${
          activeClass === "all" ? "tab-item" : ""
        }`}
        onClick={() => filterProjects("all")}
      >
        All
      </h6>
      <h6
        className={` p-1 cursor-pointer ${
          activeClass === "web" ? "tab-item" : ""
        }`}
        onClick={() => filterProjects("web")}
      >
        Web Design
      </h6>
      <h6
        className={` p-1 cursor-pointer ${
          activeClass === "game" ? "tab-item" : ""
        }`}
        onClick={() => filterProjects("game")}
      >
        Web Games
      </h6>
    </div>
  );
};
