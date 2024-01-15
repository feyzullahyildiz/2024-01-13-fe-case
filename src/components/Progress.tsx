import styled from "@emotion/styled";

interface Props {
  color: string;
  barColor: string;
}
export const Progress = styled.progress<Props>`
  border: none;
  height: 4px;
  width: 100%;
  &::-webkit-progress-value {
    background-color: ${(props) => props.color};
  }
  &::-webkit-progress-bar {
    background-color: ${(props) => props.barColor};
  }
`;
