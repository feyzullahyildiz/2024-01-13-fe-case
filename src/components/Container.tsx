import syled from "@emotion/styled";

interface Props {
  vertical?: boolean;
  horizontal?: boolean;
  gap?: string;
  alignCenter?: boolean;
}
export const Container = syled.div<Props>`
  position: relative;
  padding: 30.5px 80px;
  max-width: 1440px;
  margin: auto;
  display: flex;
  flex-direction: ${(props) => (props.vertical ? "column" : "row")};
  gap: ${(props) => props.gap || "0"};
  align-items: ${(props) => (props.alignCenter ? "center" : "inherit")};
`;
