import styled from "@emotion/styled";
interface Props {
  color?: string;
  size?: number;
  width?: number;
  height?: number;
  radius?: number;
  absolute?: boolean;
  left?: number;
  right?: number;
  bottom?: number;
  top?: number;
  opacity?: number;
  originCenter?: boolean;
  rounded?: boolean;
  rotateDeg?: number;
}
export const ColoredSquare = styled.div<Props>`
  width: ${(props) => {
    if (props.size) {
      return props.size + "px";
    }
    if (props.width) {
      return props.width + "px";
    }
    return "100%";
  }};
  height: ${(props) => {
    if (props.height) {
      return props.height + "px";
    }
    return undefined;
  }};
  background: ${(props) => props.color};
  border-radius: ${(props) => {
    if (props.rounded) {
      return "50%";
    }
    if (props.radius) {
      return props.radius + "px";
    }
    return "0";
  }};
  aspect-ratio: 1;
  position: ${(props) => (props.absolute ? "absolute" : "inherit")};

  opacity: ${(props) => (props.opacity ? props.opacity : "1")};
  transform: ${(props) => {
    const arr = [];
    if (props.originCenter) {
      arr.push(`translate(-50%, -50%)`);
    }
    if (props.rotateDeg) {
      arr.push(`rotate(${props.rotateDeg}deg)`);
    }
    return arr.join(" ");
  }};

  left: ${(props) => {
    if (props.left) {
      return props.left + "px";
    }
    if (props.originCenter) {
      return "50%";
    }
    return "inherit";
  }};
  top: ${(props) => {
    if (props.top) {
      return props.top + "px";
    }
    if (props.originCenter) {
      return "50%";
    }
    return "inherit";
  }};
  right: ${(props) => (props.right ? props.right + "px" : "inherit")};
  bottom: ${(props) => (props.bottom ? props.bottom + "px" : "inherit")};
`;
