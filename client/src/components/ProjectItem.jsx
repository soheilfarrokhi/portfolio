import React from "react";
import { Link } from "react-router-dom";

export const ProjectItem = ({ img, title, date }) => {
  return (
    <Link to={"/"} className="flex flex-col justify-between p-2 gap-2">
      <div className="project_image w-full h-[200px] overflow-hidden rounded">
        <img className="object-cover" src={img} alt="" />
      </div>
      <p className="date">{date}</p>
      <div className="head6">{title}</div>
    </Link>
  );
};
