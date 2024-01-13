import styled from "@emotion/styled";
import { ColoredSquare } from "../../../../../components";
const Main = styled.div`
  overflow: hidden;
`;
export const AbsoluteSquareContainer = () => {
  return (
    <Main>
      <ColoredSquare
        absolute
        left={-35}
        top={176}
        size={271}
        radius={50}
        opacity={0.75}
        color="#BE185D"
      />
      <ColoredSquare
        absolute
        left={422}
        top={-31}
        size={161}
        radius={50}
        opacity={0.75}
        color="#0369A1"
      />
      <ColoredSquare
        absolute
        left={721}
        top={294}
        size={130}
        radius={30}
        opacity={0.75}
        color="#B45309"
      />
      <ColoredSquare
        absolute
        left={982}
        top={294}
        size={202}
        radius={30}
        opacity={0.75}
        color="#A21CAF"
      />
      <ColoredSquare
        absolute
        left={1091}
        top={33}
        size={232}
        radius={50}
        opacity={0.75}
        color="#15803D"
      />
    </Main>
  );
};
