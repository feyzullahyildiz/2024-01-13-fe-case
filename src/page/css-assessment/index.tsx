import { ThemeProvider } from "@emotion/react";
import { SideA, SideB, SideC, SideD } from "./side";
import { getTheme } from "../../utils/getTheme";

const theme = getTheme();

export const CssAssesment = () => {
  return (
    <ThemeProvider theme={theme}>
      <SideA />
      <SideB />
      <SideC />
      <SideD />
    </ThemeProvider>
  );
};
