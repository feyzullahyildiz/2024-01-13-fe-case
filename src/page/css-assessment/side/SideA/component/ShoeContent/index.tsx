import styled from "@emotion/styled";
import {
  ColoredSquare,
  Container,
  LinkButton,
  SignUpNow,
} from "../../../../../../components";
import ImageGoldShoe from "./goldNikeShoe.png";
import PlayIconSVG from "./PlayIcon.svg";
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const Title = styled.div`
  font-size: 72px;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
const ShoeImageComponent = styled.img`
  z-index: 2;
`;

export const ShoeContent = () => {
  return (
    <Container horizontal alignCenter gap="80px">
      <Left>
        <Title>Collectible Sneakers</Title>
        <div>
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet.
        </div>
        <ButtonContainer>
          <SignUpNow />
          <LinkButton gap="8px">
            <img src={PlayIconSVG} />
            Watch Demo
          </LinkButton>
        </ButtonContainer>
      </Left>
      <Right>
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
