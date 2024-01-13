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
      <Container vertical alignCenter gap="40px">
        <ShoeContent />
        <SubItems />
        <YellowTriangle />
      </Container>
    </Main>
  );
};
