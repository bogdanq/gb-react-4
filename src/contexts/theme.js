import { createContext, useCallback, useState } from "react";
import { ThemeProvider } from "@mui/material";

export const ThemeContext = createContext("default value");

export const CustomThemeProvider = ({ children, themes, initialTheme }) => {
  const [theme, setTheme] = useState(themes[initialTheme]);

  const themeSetter = useCallback(
    (themeName) => {
      if (themes[themeName]) {
        setTheme(themes[themeName]);
      }
    },
    [themes]
  );

  return (
    <ThemeContext.Provider value={{ theme, themeSetter }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
