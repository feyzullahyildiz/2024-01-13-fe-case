import React from "react";
import styled from "@emotion/styled";
import { Button, Title } from ".";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 399px;
  box-shadow: 0px 0px 15px 0px #ffffff12, 0px 25px 50px -12px #ffffff40;
  border-radius: 4px;
  background: #0f172a;
  overflow: hidden;
`;
const Head = styled.div`
  min-height: 50px;
  overflow: hidden;
`;
const Footer = styled.div`
  min-height: 50px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Description = styled.div`
  max-width: 330px;
`;
interface Props {
  imgSrc: string;
  title: string;
  desc: string;
  buttonContent: React.ReactNode;
}
export const ImageCart: React.FC<Props> = ({
  imgSrc,
  title,
  desc,
  buttonContent,
}) => {
  return (
    <Main>
      <Head>
        <img src={imgSrc} />
      </Head>
      <Footer>
        <Title fontSize={24}>{title}</Title>

        <Description>{desc}</Description>
        <Button>{buttonContent}</Button>
      </Footer>
    </Main>
  );
};
