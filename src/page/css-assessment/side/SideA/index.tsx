import styled from "@emotion/styled";
import { Header } from "../../component";
import { Container } from "../../../../components";
import { ShoeContent, SubItems, YellowTriangle } from "./component";
const Main = styled.nav`
  min-height: 100vh;
  background: #fffbeb;
`;
export const SideA = () => {
  return (
    <Main>
      <Header />
      <div>
        <Container noPadding vertical alignCenter gap="40px" style={{ zIndex: 10 }}>
          <ShoeContent />
          <SubItems />
        </Container>
        <YellowTriangle />
      </div>
    </Main>
  );
};
