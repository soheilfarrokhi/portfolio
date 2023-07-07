import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { HomeView } from "./views/HomeView";
import { WorksView } from "./views/WorksView";
import { AboutView } from "./views/AboutView";
import { SkillsView } from "./views/SkillsView";
import { ContactView } from "./views/ContactView";

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/works" element={<WorksView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/skills" element={<SkillsView />} />
          <Route path="/contact" element={<ContactView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
