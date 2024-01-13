import styled from "@emotion/styled";

const Triangle = styled.div`
  background: #FEF3C7;
  position: absolute;
  clip-path: polygon(100% 18%, 0% 100%, 100% 100%);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  height: 100%;
`;

export const YellowTriangle = () => {
  return <Triangle />;
};
