import { FC } from "react";
import styled from "@emotion/styled";
const Main = styled.div`
  width: 100%;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px 32px;
  border-radius: 20px;

  background: white;

  box-shadow: 0px 0px 6px 0px #00000012, 0px 10px 15px -3px #0000001a;
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: 700;
  font-size: 24px;
  padding: 16px 0;
`;
const Description = styled.div`
  font-weight: 400;
  font-size: 24px;
`;
const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: 700;
  font-size: 24px;
  margin-top: 16px;
`;
const Avatar = styled.img``;
const UserText = styled.div`
  font-weight: 400;
  font-size: 18px;
`;
const User = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
`;
const UserTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #475569;
`;
interface Props {
  avatarSrc: string;
  brandSrc: string;
  brand: string;
  description: string;
}
export const Cart: FC<Props> = ({
  brand,
  description,
  brandSrc,
  avatarSrc,
}) => {
  return (
    <Main>
      <Head>
        <img src={brandSrc} />
        {brand}
      </Head>
      <Description>{description}</Description>
      <Footer>
        <Avatar src={avatarSrc} />
        <User>
          <UserText>Hellen Jummy</UserText>
          <UserTitle>Team Lead</UserTitle>
        </User>
      </Footer>
    </Main>
  );
};
