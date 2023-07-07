import React from "react";
import { useThemeContext } from "../context/ThemeProvider";

export const ViewLayout = ({
  className = "",
  title = "",
  desc = "",
  className2 = "",
  children,
}) => {
  const { mode } = useThemeContext();
  return (
    <div
      className={
        mode + " " + "w-full min-h-screen h-full p-4 bg-theme-white flex-1"
      }
    >
      <div className="view_header capitalize mb-16 text-theme-primary max-w-[900px] m-auto">
        <h2 className="mb-2">{title} .</h2>
        <h6>{desc}</h6>
      </div>
      <div className={"flex justify-center items-center text-theme-primary"}>
        <div className={`w-full  max-w-[900px] p-4 rounded-lg ${className}`}>
          <div className={className2}>{children}</div>
        </div>
      </div>
    </div>
  );
};
