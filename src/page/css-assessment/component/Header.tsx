import styled from "@emotion/styled";
import { Container, LinkButton, SignUpNow } from "../../../components";
import { useIsMobile } from "../../../hooks";
import HamburgerIconSVG from "./HamburgerIcon.svg";

const Row = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
`;
const Nav = styled.div`
  display: flex;
  gap: 1rem;
`;
const LogoText = styled.div`
  color: ${(props) => props.theme.color.link};
  font-weight: 700;
  font-size: 32px;
`;
export const Header = () => {
  const isMobile = useIsMobile();
  return (
    <Container>
      <Row>
        <LogoText>Collers</LogoText>
        {isMobile ? (
          <img src={HamburgerIconSVG} />
        ) : (
          <Nav>
            <LinkButton>Products</LinkButton>
            <LinkButton>Solutions</LinkButton>
            <LinkButton>Pricing</LinkButton>
            <LinkButton>Resources</LinkButton>
            <LinkButton>Log In</LinkButton>
            <SignUpNow />
          </Nav>
        )}
      </Row>
    </Container>
  );
};
