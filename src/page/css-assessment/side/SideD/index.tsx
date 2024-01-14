import styled from "@emotion/styled";
import { Container, Title } from "../../../../components";
import { LeftArrowSVG, RigthArrow, Slide } from "./components";
import { useIsMobile } from "../../../../hooks";
const Main = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.background.primary};
  * {
    color: ${(props) => props.theme.color.color};
  }
`;
const HeadButtonContainer = styled.div`
  display: flex;
  gap: 16px;
`;
const ImgIcon = styled.img`
  cursor: pointer;
`;
const YellowArea = styled.div`
  box-sizing: border-box;
  min-height: 420px;
  background: #fde68a;
  margin: 0 40px;
  display: flex;
`;
export const SideD = () => {
  const isMobile = useIsMobile();
  return (
    <Main>
      <Container justify="space-between" alignCenter>
        <Title fontWeight={800} fontSize={56}>
          Because they love us
        </Title>
        {!isMobile && (
          <HeadButtonContainer>
            <ImgIcon src={LeftArrowSVG} />
            <ImgIcon src={RigthArrow} />
          </HeadButtonContainer>
        )}
      </Container>
      <YellowArea></YellowArea>
      <Slide style={{ top: "-360px" }} />
    </Main>
  );
};
