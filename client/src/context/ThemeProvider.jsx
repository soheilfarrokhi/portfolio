import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("");
  const themeSettings = () => {
    setMode((mode) => (mode === "" ? "theme-2" : ""));
  };
  return (
    <ThemeContext.Provider value={{ themeSettings, mode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
