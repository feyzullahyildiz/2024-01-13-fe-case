import styled from "@emotion/styled";
import { getTheme } from "../../../../utils/getTheme";
import { ThemeProvider } from "@emotion/react";
import { Container } from "../../../../components";
import { Cart } from "./component";

const Main = styled.div`
  min-height: 816px;
  background: #fffbeb;
  overflow: hidden;
  * {
    color: ${(props) => props.theme.color.color};
  }
`;
const theme = getTheme();
export const SideC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Container paddingTopBottom="160px">
          <Cart />
        </Container>
      </Main>
    </ThemeProvider>
  );
};
