import styled from "@emotion/styled";
import { Container, Title } from "../../../../components";
import { LeftArrowSVG, RigthArrow, Slide } from "./components";
import { useIsMobile } from "../../../../hooks";
const Main = styled.div`
  background: ${(props) => props.theme.background.primary};
  position: relative;
  padding-bottom: 80px;
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
  position: absolute;
  top: -24px;
  right: 0;
  left: 0;
`;
export const SideD = () => {
  const isMobile = useIsMobile();
  return (
    <Main>
      <Container justify="space-between" alignCenter justifyCenterIfMobile>
        <Title
          fontWeight={800}
          fontSize={isMobile ? 32 : 56}
          textCenter={isMobile}
          style={{paddingBottom: 32}}
        >
          Because they love us
        </Title>
        {!isMobile && (
          <HeadButtonContainer>
            <ImgIcon src={LeftArrowSVG} />
            <ImgIcon src={RigthArrow} />
          </HeadButtonContainer>
        )}
      </Container>
      <Container padding="24px 0 0 0">
        <YellowArea></YellowArea>
        <Slide />
      </Container>
    </Main>
  );
};
