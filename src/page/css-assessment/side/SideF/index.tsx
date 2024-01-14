import styled from "@emotion/styled";
import { getTheme } from "../../../../utils/getTheme";
import { ThemeProvider } from "@emotion/react";
import { World } from "./component";

const Main = styled.div`
  background: ${(props) => props.theme.background.primary};
  position: relative;
  * {
    color: ${(props) => props.theme.color.color};
  }
`;
const theme = getTheme("rgba(255, 251, 235, 1)", "rgba(255, 251, 235, 1)", {
  backgroundPrimary: "rgba(120, 53, 15, 1)",
});
export const SideF = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <World />
      </Main>
    </ThemeProvider>
  );
};
