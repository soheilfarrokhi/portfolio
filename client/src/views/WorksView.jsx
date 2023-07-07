import React, { useState } from "react";
import { useThemeContext } from "../context/ThemeProvider";
import { ProjectsTab } from "../components/ProjectsTab";
import { ProjectsList } from "../components/ProjectsList";
import { ViewLayout } from "../layout/ViewLayout";
import { projects } from "../data/projectData";

export const WorksView = () => {
  const [allProjects, setAllProjects] = useState(projects);
  const { mode } = useThemeContext();
  return (
    <ViewLayout title={"Projects"} desc={"All projects"} className="shadow-md">
      <ProjectsTab setProjects={setAllProjects} />
      <ProjectsList projects={allProjects} />
    </ViewLayout>
  );
};
