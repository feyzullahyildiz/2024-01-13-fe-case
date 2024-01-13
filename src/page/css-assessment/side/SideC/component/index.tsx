import styled from "@emotion/styled";
import { Container, SignUpNow, Title } from "../../../../../components";
import { CheckIconSvg } from "./assets";
import { VideoPlayer } from "./VideoPlayer";
import { VideoPlayerIcons } from "./VideoPlayerIcons";
const Main = styled.div`
  width: 100%;
  background: white;
  border-radius: 30px;
  box-shadow: 0px 0px 10px 0px #00000012, 0px 20px 25px -5px #0000001a;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const ListItem = styled.div`
  display: flex;
  gap: 14px;
`;

export const Cart = () => {
  return (
    <Main>
      <Container
        padding="80px 80px"
        mobilePadding="32px 16px"
        justify="space-between"
        wrapIfMobile
        gap="48px"
        wrap
      >
        <Container
          vertical
          noPadding
          alignItems="flex-start"
          gap="24px"
          alignCenterIfMobile
          style={{ zIndex: 1, flex: 1, flexBasis: "320px", flexShrink: 0 }}
        >
          <Title textCenter>Why join us</Title>
          <List>
            <ListItem>
              <img src={CheckIconSvg} />
              Est et in pharetra magna adipiscing ornare aliquam.
            </ListItem>
            <ListItem>
              <img src={CheckIconSvg} />
              Tellus arcu sed consequat ac velit ut eu blandit.
            </ListItem>
            <ListItem>
              <img src={CheckIconSvg} />
              Ullamcorper ornare in et egestas dolor orci.
            </ListItem>
          </List>
          <SignUpNow />
        </Container>
        <Container
          vertical
          noPadding
          alignCenterIfMobile
          style={{ width: "min-content", position: "relative" }}
        >
          <VideoPlayerIcons />
          <VideoPlayer />
        </Container>
      </Container>
    </Main>
  );
};
