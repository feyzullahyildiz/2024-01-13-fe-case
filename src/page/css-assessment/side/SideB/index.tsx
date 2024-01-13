import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import { getTheme } from "../../../../utils/getTheme";
import { Container, SignUpNow, Title } from "../../../../components";
import { CartContainer } from "./component";
import { AbsoluteSquareContainer } from "./component/AbsoluteSquareContainer";

const Main = styled.div`
  min-height: 770px;
  padding-top: 40px;
  background: #0f172a;
  position: relative;
  * {
    color: ${(props) => props.theme.color.color};
  }
`;

const theme = getTheme("white", "white");
export const SideB = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Container
          gap="40px"
          wrapIfMobile
          justifyCenterIfMobile
          justify="space-between"
          alignCenter
          paddingTopBottom="40px"
        >
          <Title>The best of the best</Title>
          <SignUpNow />
        </Container>
        <Container style={{ overflow: "hidden", paddingBottom: "48px" }}>
          <Container padding="px 0">
            <AbsoluteSquareContainer />
            <CartContainer />
          </Container>
        </Container>
      </Main>
    </ThemeProvider>
  );
};
