import { CSSProperties, FC, useMemo } from "react";
import styled from "@emotion/styled";

const Content = styled.div<{ radius: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;

  border-radius: ${(props) => props.radius + 4}px;
  padding: 4px;

  background: white;
  position: relative;

  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.07),
    0px 25px 50px -12px rgba(0, 0, 0, 0.25);
`;
const Toolbar = styled.div`
  display: flex;
  padding: 8px 16px;
  gap: 5px;
`;
const ToolbarItem = styled.div`
  display: flex;
  width: 10px;
  aspect-ratio: 1;
  border-radius: 10px;
  background: ${(props) => props.color};
`;
const Img = styled.img<{ fullRadius?: boolean; radius: number }>`
  // min-width: 300px;
  // max-width: min(500px, 80vw);
  width: 100%;
  border-radius: ${(props) => (props.fullRadius ? props.radius + "px" : "0")};
  border-bottom-left-radius: ${(props) => props.radius}px;
  border-bottom-right-radius: ${(props) => props.radius}px;
`;
interface Props {
  radius?: number;
  hideToolbar?: boolean;
  imgSrc: string;
  style?: CSSProperties;
  maxImgWidth?: string;
}
export const MacWindow: FC<Props> = ({
  radius = 16,
  imgSrc,
  maxImgWidth,
  style,
  hideToolbar = false,
}) => {
  const maxWidth = useMemo(() => {
    if (!maxImgWidth) {
      return undefined;
      return "80vw";
    }
    return maxImgWidth;
  }, [maxImgWidth]);
  return (
    <Content radius={radius} style={{ maxWidth, ...style }}>
      {hideToolbar || (
        <Toolbar>
          <ToolbarItem color="#E11D48" />
          <ToolbarItem color="#FBBF24" />
          <ToolbarItem color="#22C55E" />
        </Toolbar>
      )}
      <Img src={imgSrc} fullRadius={hideToolbar} radius={radius} />
    </Content>
  );
};
