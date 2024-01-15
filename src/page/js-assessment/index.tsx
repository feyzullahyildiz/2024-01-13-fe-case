import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import { getTheme } from "../../utils/getTheme";
import { ThemeProvider } from "@emotion/react";
const Main = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${(props) => props.theme.background.primary};
  position: relative;
  * {
    color: ${(props) => props.theme.color.color};
  }
`;

const theme = getTheme("#c1c1c1", "#c1c1c1", {
  backgroundPrimary: "black",
});
export const JsAssessment = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main className="MAIN">
        <Outlet />
      </Main>
    </ThemeProvider>
  );
};
