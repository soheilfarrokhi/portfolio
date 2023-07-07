import React, { useState } from "react";
import { DesktopMenu } from "../components/DesktopMenu";
import { Outlet } from "react-router-dom";
import { useThemeContext } from "../context/ThemeProvider";
import { BiMenuAltLeft } from "react-icons/bi";
import { BsMoonFill } from "react-icons/bs";

const MainLayout = () => {
  const { themeSettings } = useThemeContext();
  const [toggle, setToggle] = useState(false);
  const { mode } = useThemeContext();

  const closeNavbar = () => {
    setToggle(!toggle);
  };

  return (
    <div className={"flex w-full min-h-screen " + " " + mode}>
      <div
        className="fixed top-4 right-4 cursor-pointer text-theme-primary"
        onClick={themeSettings}
      >
        <BsMoonFill />
      </div>
      <div
        className="lg:hidden sm:block fixed top-4 left-4 text-[1.5rem] text-theme-primary cursor-pointer"
        onClick={closeNavbar}
      >
        <BiMenuAltLeft />
      </div>

      <DesktopMenu
        exClass={toggle ? "mobile_navbar_visible" : ""}
        close={closeNavbar}
      />

      <Outlet />
    </div>
  );
};

export default MainLayout;
