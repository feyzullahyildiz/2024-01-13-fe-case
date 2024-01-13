import styled from "@emotion/styled";
import { Container } from "../../../../../../components";
import { TvSVG, CupSVG, WaterMelonSVG, Icon1, Icon2, Icon3 } from "./icons";

const Item = styled.nav``;
const Icon = styled.nav`
  position: relative;
`;
const AbsoluteImg = styled.img<{ left?: string; top?: string }>`
  position: relative;
  left: ${(props) => props.left || "inherit"};
  top: ${(props) => props.top || "inherit"};
`;
const Title = styled.nav`
  font-size: 20px;
  font-weight: 600;
`;
const Description = styled.nav`
  font-size: 16px;
  max-width: 400px;
`;

export const SubItems = () => {
  return (
    <Container gap="40px" wrap justifyCenterIfMobile>
      <Item>
        <Icon>
          <img src={CupSVG} />
          <AbsoluteImg src={Icon1} left="-37px" top="-28px" />
        </Icon>
        <Title>Nibh viverra</Title>
        <Description>
          Sit bibendum donec dolor fames neque vulputate non sit aliquam.
          Consequat turpis natoque leo, massa.{" "}
        </Description>
      </Item>
      <Item>
        <Icon>
          <img src={WaterMelonSVG} />
          <AbsoluteImg src={Icon2} left="-37px" top="-28px" />
        </Icon>
        <Title>Cursus amet</Title>
        <Description>
          Sit bibendum donec dolor fames neque vulputate non sit aliquam.
          Consequat turpis natoque leo, massa.
        </Description>
      </Item>
      <Item>
        <Icon>
          <img src={TvSVG} />
          <AbsoluteImg src={Icon3} left="-22px" top="-18px" />
        </Icon>
        <Title>Ipsum fermentum</Title>
        <Description>
          Sit bibendum donec dolor fames neque vulputate non sit aliquam.
          Consequat turpis natoque leo, massa.
        </Description>
      </Item>
    </Container>
  );
};
