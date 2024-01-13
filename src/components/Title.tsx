import styled from "@emotion/styled";
interface Props {
  fontSize?: number;
  fontWeight?: number;
  textCenter?: boolean;
}
export const Title = styled.div<Props>`
  color: ${(props) => props.theme.color.color};
  font-size: ${(props) => (props.fontSize || "56") + "px"};
  font-weight: ${(props) => props.fontWeight || 700};
  text-align: ${(props) => (props.textCenter ? "center" : "inherit")};
`;
