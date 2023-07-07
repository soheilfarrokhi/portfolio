import React from "react";
import AboutImg from "../assets/people/2.jpg";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../context/ThemeProvider";
import { ViewLayout } from "../layout/ViewLayout";

export const AboutView = () => {
  const { mode } = useThemeContext();
  const navigate = useNavigate();

  const gotoContact = () => {
    navigate("/contact");
  };
  return (
    <ViewLayout title={"About"} desc={"About me"} className="shadow-md">
      <div className="about_ flex gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <h6 className="text-medium-medium">i a'm developer</h6>
          <h2 className="uppercase">i cat develop anything you want</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <button
            className="bg-theme-primary text-theme-white rounded w-fit p-2 mt-4"
            onClick={gotoContact}
          >
            Contact me
          </button>
        </div>

        <div className="flex-1 overflow-hidden rounded-md">
          <img
            className="object-cover w-full h-full"
            src={AboutImg}
            alt="hero"
          />
        </div>
      </div>
    </ViewLayout>
  );
};
