import styled from "@emotion/styled";
import LogoPng from "./Video.png";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;

  border-radius: 20px;
  padding: 4px;

  background: white;
  position: relative;

  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.07),
    0px 25px 50px -12px rgba(0, 0, 0, 0.25);
`;
const Toolbar = styled.div`
  display: flex;
  padding: 16px;
  gap: 5px;
`;
const ToolbarItem = styled.div`
  display: flex;
  width: 10px;
  aspect-ratio: 1;
  border-radius: 10px;
  background: ${(props) => props.color};
`;
const Img = styled.img`
  min-width: 300px;
  max-width: min(500px, 80vw);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;
export const VideoPlayer = () => {
  return (
    <Content>
      <Toolbar>
        <ToolbarItem color="#E11D48" />
        <ToolbarItem color="#FBBF24" />
        <ToolbarItem color="#22C55E" />
      </Toolbar>
      <Img src={LogoPng} />
    </Content>
  );
};
