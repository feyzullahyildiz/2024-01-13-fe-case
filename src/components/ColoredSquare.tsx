import styled from "@emotion/styled";
interface Props {
  color?: string;
  size?: number;
  radius?: number;
  absolute?: boolean;
  left?: number;
  right?: number;
  bottom?: number;
  top?: number;
  opacity?: number;
}
export const ColoredSquare = styled.div<Props>`
  width: ${(props) => {
    if (props.size) {
      return props.size + "px";
    }
    return "100%";
  }};
  background: ${(props) => props.color};
  border-radius: ${(props) => (props.radius ? props.radius + "px" : "0")};
  aspect-ratio: 1;
  position: ${(props) => (props.absolute ? "absolute" : "inherit")};
  left: ${(props) => (props.left ? props.left + "px" : "inherit")};
  right: ${(props) => (props.right ? props.right + "px" : "inherit")};
  bottom: ${(props) => (props.bottom ? props.bottom + "px" : "inherit")};
  top: ${(props) => (props.top ? props.top + "px" : "inherit")};
  opacity: ${(props) => (props.opacity ? props.opacity : "1")};
`;
