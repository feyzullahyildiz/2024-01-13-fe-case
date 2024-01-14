import { Container, Title } from "../../../../components";
import styled from "@emotion/styled";
import { List, RightWindowArea, Waves } from "./components";
import { useIsMobile } from "../../../../hooks";

const Main = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.background.primary};
  padding: 80px 0;
  position: relative;
`;

export const SideE = () => {
  const isMobile = useIsMobile();
  return (
    <Main>
      <Waves />
      <Container vertical>
        <Title textCenter={isMobile}>Grow your collection</Title>
        <Title fontSize={16} fontWeight={400} textCenter={isMobile}>
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </Title>
      </Container>
      <Container
        horizontal
        justify="space-between"
        alignItems="flex-start"
        wrapIfMobile
        alignCenterIfMobile
        justifyCenterIfMobile
        verticalIfMobile
        gap="48px"
      >
        <List />
        <RightWindowArea />
      </Container>
    </Main>
  );
};
