import { ThemeProvider } from "@emotion/react";
import { SideA, SideB } from "./side";
import { getTheme } from "../../utils/getTheme";

const theme = getTheme();

export const CssAssesment = () => {
  return (
    <ThemeProvider theme={theme}>
      <SideA />
      <SideB />
      <SideA />
    </ThemeProvider>
  );
};
