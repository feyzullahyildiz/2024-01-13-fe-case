import styled from "@emotion/styled";

export const Button = styled.button`
  padding: 12px 8px 12px 8px;
  font-size: 20px;

  border-radius: 4px;
  color: ${(props) => props.theme.color.color};
  font-weight: bold;
  background: transparent;
  outline: none;

  border: 2px solid ${(props) => props.theme.color.color};
  border-radius: 8px;
`;
