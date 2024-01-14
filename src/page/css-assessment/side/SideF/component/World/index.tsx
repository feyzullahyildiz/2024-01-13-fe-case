import styled from "@emotion/styled";
import { WorldSvgComponent } from "./svgs";
import { MacWindow, Title } from "../../../../../../components";
import { ShoesPNG } from "./image";
import { useIsMobile } from "../../../../../../hooks";
const Main = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.background.primary};
  padding: 80px 0;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
`;
const DescriptionWithTick = styled.div`
  margin: 0 16px;
  margin-top: -8px;
  margin-bottom: 14px;
  background: #e2e8f0;
  color: black;
  font-size: 14px;
  padding: 16px 16px 8px 16px;
  border-radius: 5px;
  position: relative;
  z-index: -1;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.07),
    0px 25px 50px -12px rgba(0, 0, 0, 0.25);

  &:before {
    content: " ";
    background: inherit;
    width: 18px;
    height: 18px;
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translate(-50%, 0) rotate(45deg);
    z-index: -1;
    border-radius: 2px;
  }
`;
const Tooltip = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Counts = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 180px;
`;
export const World = () => {
  const isMobile = useIsMobile();
  return (
    <Main>
      <WorldSvgComponent
        style={{ marginLeft: isMobile ? "80px" : 0, paddingTop: "80px" }}
      >
        <Tooltip>
          <MacWindow
            hideToolbar
            style={{ minWidth: "280px", flex: 1, width: "100%" }}
            imgSrc={ShoesPNG}
          />
          <DescriptionWithTick>
            Emma Simpson collected one pair of{" "}
            <strong style={{ color: "black" }}>Cool Shoes.</strong>
          </DescriptionWithTick>
        </Tooltip>
      </WorldSvgComponent>
      <Counts>
        <Title fontSize={isMobile ? 48 : 96}>11,658,467</Title>
        <Title fontSize={isMobile ? 32 : 56}>Shoes Collected</Title>
      </Counts>
    </Main>
  );
};
