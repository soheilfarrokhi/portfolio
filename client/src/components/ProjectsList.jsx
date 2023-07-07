import React, { useState } from "react";

import { ProjectItem } from "./ProjectItem";

export const ProjectsList = ({ projects }) => {
  console.log(projects);
  const [more, setMore] = useState(false);
  const loadMore = () => {
    setMore(!more);
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        className={
          " projects_ grid grid-cols-3 items-center gap-8 w-full h-full py-2 "
        }
      >
        {projects.map((project, i) => {
          if (!more) {
            if (i < 3) {
              return (
                <>
                  <ProjectItem key={i} {...project} />
                </>
              );
            } else {
              return;
            }
          } else {
            return (
              <>
                <ProjectItem key={i} {...project} />
              </>
            );
          }
        })}
      </div>
      <div className="load-more m-auto">
        <button
          onClick={loadMore}
          className="w-[200px] p-2 capitalize bg-theme-primary text-theme-white rounded"
        >
          {!more ? "Load more" : "Load Less"}
        </button>
      </div>
    </div>
  );
};
