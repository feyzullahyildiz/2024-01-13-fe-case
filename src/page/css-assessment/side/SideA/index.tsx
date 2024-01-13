import styled from "@emotion/styled";
import { Header } from "../../component";
import { Container } from "../../../../components";
import { ShoeContent, SubItems, AbsoluteYellowTriangle } from "./component";
const Main = styled.nav`
  min-height: 100vh;
  background: #fffbeb;
  position: relative;
`;
const ContentDiv = styled.div``;
export const SideA = () => {
  return (
    <Main>
      <Header />
      <ContentDiv>
        <Container
          wrap
          noPadding
          vertical
          alignCenter
          gap="40px"
          style={{ zIndex: 10 }}
        >
          <ShoeContent />
          <SubItems />
        </Container>
        <AbsoluteYellowTriangle />
      </ContentDiv>
    </Main>
  );
};
