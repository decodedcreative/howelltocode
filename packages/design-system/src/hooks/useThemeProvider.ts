import { useContext } from "react";
import { ThemeContext } from "../providers/theme/ThemeProvider";

export const useThemeProvider = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    console.error(
      'No ThemeProvider has been found in this application. Using components without this provider may lead to unexpected behavior.'
    );
  }

  return context;
};
