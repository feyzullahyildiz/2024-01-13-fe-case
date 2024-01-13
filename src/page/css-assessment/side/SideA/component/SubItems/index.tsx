import React from "react";
import styled from "@emotion/styled";
import CupSVG from "./Cup.svg";
import WaterMelonSVG from "./WaterMelon.svg";
import TvSVG from "./Tv.svg";
import { Container } from "../../../../../../components";

const Item = styled.nav`
  background: #fffbeb;
`;
const Icon = styled.nav`
  background: #fffbeb;
`;
const Title = styled.nav`
  background: #fffbeb;
`;
const Description = styled.nav`
  background: #fffbeb;
`;

export const SubItems = () => {
  return (
    <Container>
      <Item>
        <Icon>
          <img src={CupSVG}></img>
        </Icon>
        <Title>Nibh viverra</Title>
        <Description>
          Sit bibendum donec dolor fames neque vulputate non sit aliquam.
          Consequat turpis natoque leo, massa.{" "}
        </Description>
      </Item>
      <Item>
        <Icon>
          <img src={WaterMelonSVG}></img>
        </Icon>
        <Title>Cursus amet</Title>
        <Description>
          Sit bibendum donec dolor fames neque vulputate non sit aliquam.
          Consequat turpis natoque leo, massa.
        </Description>
      </Item>
      <Item>
        <Icon>
          <img src={TvSVG}></img>
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
