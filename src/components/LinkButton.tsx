import styled from "@emotion/styled";
interface Props {
  variant?: "standart" | "outline";
  padding?: string;
  gap?: string;
}
export const LinkButton = styled.div<Props>`
  font-size: 16px;
  display: flex;
  gap: ${(props) => props.gap || "0"};
  align-items: center;
  color: ${(props) => props.theme.color.link} !important;
  font-weight: 600;
  cursor: pointer;
  padding: ${(props) => props.padding || "4px 8px"};
  border-radius: 8px;
  border: ${(props) =>
    props.variant === "outline"
      ? `2px solid ${props.theme.color.link}`
      : "none"};
`;
