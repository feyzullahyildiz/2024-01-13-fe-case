import styled from "@emotion/styled";

const Triangle = styled.div`
  clip-path: polygon(0 100vh, 100% 12%, 100% 100%, 0% 100%);
  background: #fef3c7;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  height: 100%;
`;

export const AbsoluteYellowTriangle = () => {
  return <Triangle />;
};
