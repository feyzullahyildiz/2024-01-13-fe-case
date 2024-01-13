import styled from "@emotion/styled";
import {
  ColoredSquare,
  Container,
  LinkButton,
  SignUpNow,
  Title,
} from "../../../../../../components";
import ImageGoldShoe from "./goldNikeShoe.png";
import PlayIconSVG from "./PlayIcon.svg";
import { useIsMobile } from "../../../../../../hooks";

interface TextAlingProps {
  textCenter?: boolean;
}
interface StyleProps extends TextAlingProps {
  isMobile: boolean;
}

const TextAlignCenter = styled.div<TextAlingProps>`
  text-align: ${(props) => (props.textCenter ? "center" : "inherit")};
`;
const AlignCenter = styled(TextAlignCenter)<StyleProps>`
  text-align: ${(props) => (props.textCenter ? "center" : "inherit")};
`;

const JustifyCenter = styled(TextAlignCenter)<StyleProps>`
  justify-content: ${(props) => (props.isMobile ? "center" : "inherit")};
`;
const Right = styled(AlignCenter)`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const Left = styled(AlignCenter)`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ButtonContainer = styled(JustifyCenter)`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const Description = styled.div<{ textCenter: boolean }>`
  max-width: 700px;
  text-align: ${(props) => (props.textCenter ? "center" : "inherit")};
`;

const ShoeImageComponent = styled.img`
  z-index: 2;
  max-width: 80vw;
  min-width: 300px;
`;

export const ShoeContent = () => {
  const isMobile = useIsMobile();
  return (
    <Container
      horizontal
      alignCenter
      justify="space-between"
      justifyCenterIfMobile
      noWrap
      wrapIfMobile
    >
      <Left isMobile={isMobile}>
        <Title fontSize={72} textCenter={isMobile}>
          Collectible Sneakers
        </Title>
        <Description textCenter={isMobile}>
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet.
        </Description>
        <ButtonContainer isMobile={isMobile}>
          <SignUpNow />
          <LinkButton gap="8px">
            <img src={PlayIconSVG} />
            Watch Demo
          </LinkButton>
        </ButtonContainer>
      </Left>
      <Right isMobile={isMobile}>
        <ShoeImageComponent src={ImageGoldShoe} />
        <ColoredSquare
          color="#FBBF24"
          radius={50}
          style={{
            position: "absolute",
            width: "calc(100% - 120px)",
            transform: "translateY(50px)",
          }}
        />
      </Right>
    </Container>
  );
};
