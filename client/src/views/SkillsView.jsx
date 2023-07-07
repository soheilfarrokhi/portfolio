import React from "react";
import { MdScreenshotMonitor, MdAnalytics } from "react-icons/md";
import { AiOutlineMobile, AiFillHtml5 } from "react-icons/ai";
import { DiPhotoshop } from "react-icons/di";
import { SiAdobexd } from "react-icons/si";
import { useThemeContext } from "../context/ThemeProvider";
import { ViewLayout } from "../layout/ViewLayout";

export const SkillsView = () => {
  const { mode } = useThemeContext();
  return (
    <ViewLayout title={"Skills"} desc={""} className="shadow-md">
      <div className="skills_box flex flex-col justify-center gap-8 w-full h-full max-w-[900px] m-auto">
        <div className=" flex flex-col gap-4">
          <h2 className="capitalize mb-4">what i do ?</h2>
          <div className="flex what_i_do_ justify-between gap-4">
            {/* widgets  */}
            <div className="flex flex-col gap-2">
              <MdScreenshotMonitor className="text-[2rem]" />
              <h6 className="title capitalize">ui / ux designer</h6>
              <p className="desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <MdAnalytics className="text-[2rem]" />
              <h6 className="title capitalize">Web Design</h6>
              <p className="desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <AiOutlineMobile className="text-[2rem]" />
              <h6 className="title capitalize">mobile desgin</h6>
              <p className="desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="capitalize">Skills</h3>
          <div className="flex flex-col gap-2">
            <div className="skills_  grid grid-cols-3 gap-4 mb-4">
              <div className="flex itmes-center gap-1">
                <AiFillHtml5 className="text-[2rem]" />
                <h6 className=" flex items-center leading-none">Html</h6>
              </div>
              <div className="flex itmes-center gap-1">
                <AiFillHtml5 className="text-[2rem]" />
                <h6 className=" flex items-center leading-none">Css</h6>
              </div>
              <div className="flex itmes-center gap-1">
                <AiFillHtml5 className="text-[2rem]" />
                <h6 className=" flex items-center leading-none">Js</h6>
              </div>
              <div className="flex itmes-center gap-1">
                <AiFillHtml5 className="text-[2rem]" />
                <h6 className=" flex items-center leading-none">React js</h6>
              </div>
              <div className="flex itmes-center gap-1">
                <AiFillHtml5 className="text-[2rem]" />
                <h6 className=" flex items-center leading-none">Node js</h6>
              </div>
            </div>
            <div className="border-b" />
            <div className="flex gap-8 items-center py-4 w-full">
              <div className="flex items-center gap-1">
                <DiPhotoshop className="text-[1.5rem]" />
                Photo Shop
              </div>
              <div className="flex items-center gap-1">
                <SiAdobexd className="text-[1.5rem]" />
                Adobe Xd
              </div>
            </div>
          </div>
        </div>
      </div>
    </ViewLayout>
  );
};
