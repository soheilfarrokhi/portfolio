import React from "react";
import HeroImg from "../assets/people/1.jpg";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../context/ThemeProvider";

export const HomeView = () => {
  const navigate = useNavigate();
  const { mode } = useThemeContext();

  const gotoAbout = () => {
    navigate("/about");
  };
  return (
    <div
      className={
        mode +
        " " +
        "home_section flex justify-center items-center  w-full h-screen p-4 bg-theme-white text-theme-primary flex-1"
      }
    >
      <div className="home_box flex justify-between gap-4 items-center w-full h-full max-w-[900px] m-auto text-theme-primary">
        <div className="home_content flex flex-col gap-2 flex-1">
          <h4>hi my name is</h4>
          <h1 className="text-theme-dark">Soheil farrokhi</h1>
          <h6>i'm frontend Web Developer and Ui /Ux designer</h6>
          <button
            className="bg-theme-primary text-theme-white rounded w-fit p-2"
            onClick={gotoAbout}
          >
            About me
          </button>
        </div>
        <div className="img_box w-full flex-1 ">
          <div className="home_img w-[500px] h-[500px] rounded overflow-hidden shadow-lg">
            <img
              className="w-full  h-full object-cover"
              src={HeroImg}
              alt="hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
