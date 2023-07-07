import React from "react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../context/ThemeProvider";
import { AiOutlineClose } from "react-icons/ai";
import { BiLogoLinkedinSquare, BiLogoInstagram } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";

export const DesktopMenu = ({ exClass, close }) => {
  const { mode } = useThemeContext();
  return (
    <div
      className={
        mode +
        " " +
        "mobile_navbar flex flex-col bg-theme-primary text-theme-white p-4 w-[200px] " +
        " " +
        exClass
      }
    >
      <div
        onClick={close}
        className="close_nav absolute top-4 right-4 hidden cursor-pointer"
      >
        <AiOutlineClose />
      </div>
      <Link className="logo capitalize mb-20" to={"/"}>
        <h2>Logo</h2>
      </Link>

      <div className="links flex flex-col ">
        <Link
          className="head5 capitalize mb-2 hover:text-theme-secondary"
          id={"about"}
          to={"/about"}
        >
          About
        </Link>
        <Link
          className="head5 capitalize mb-2 hover:text-theme-secondary"
          id={"projects"}
          to={"/works"}
        >
          projects
        </Link>
        <Link
          className="head5 capitalize mb-2 hover:text-theme-secondary"
          id={"skills"}
          to={"/skills"}
        >
          Skills
        </Link>
        <Link
          className="head5 capitalize mb-2 hover:text-theme-secondary"
          id={"contact"}
          to={"/contact"}
        >
          Contact
        </Link>
      </div>
      <div className="socials flex flex-col gap-2 mt-auto">
        <div className="linkedin text-[1.2rem] cursor-pointer">
          <BiLogoLinkedinSquare />
        </div>
        <div className="instagram text-[1.2rem] cursor-pointer">
          <BiLogoInstagram />
        </div>
        <div className="whatsapp text-[1.2rem] cursor-pointer">
          <BsWhatsapp />
        </div>
        <div className="capitalize copy-right mt-10 para">
          copy-right @2023 soheil farrokhi
        </div>
      </div>
    </div>
  );
};
