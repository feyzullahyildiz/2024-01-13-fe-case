import styled from "@emotion/styled";
interface Props {
  color?: string;
  radius?: number;
}
export const ColoredSquare = styled.div<Props>`
  width: 100%;
  background: ${(props) => props.color};
  border-radius: ${(props) => (props.radius ? props.radius + "px" : "0")};
  aspect-ratio: 1;
`;
