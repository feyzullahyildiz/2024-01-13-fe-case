import { ThemeProvider } from "@emotion/react";
import { SideA, SideB, SideC, SideD, SideE, SideF, SideG } from "./side";
import { getTheme } from "../../utils/getTheme";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
const theme = getTheme();

export const CssAssesment = () => {
  return (
    <ThemeProvider theme={theme}>
      <SideA />
      <SideB />
      <SideC />
      <SideD />
      <SideE />
      <SideF />
      <SideG />
    </ThemeProvider>
  );
};
