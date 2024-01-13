import { ThemeProvider } from "@emotion/react";
import { SideA, SideB } from "./side";

const theme = {
  color: {
    link: "#78350F",
  },
};

export const CssAssesment = () => {
  return (
    <ThemeProvider theme={theme}>
      <SideA />
      <SideB />
    </ThemeProvider>
  );
};
