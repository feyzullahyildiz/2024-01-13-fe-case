import styled from "@emotion/styled";
import { ColoredSquare } from "../../../../../components";
const Main = styled.div`
  width: 100%;
  height: 100%;
  // background: #f9c1c1;
  border-radius: 30px;
  position: absolute;
  z-index: 0;
`;

export const VideoPlayerIcons = () => {
  return (
    <Main>
      <ColoredSquare
        absolute
        width={666}
        height={217}
        color="#FDE68A"
        rotateDeg={135}
        originCenter
      />
      <ColoredSquare
        absolute
        left={20}
        top={80}
        size={90}
        radius={30}
        opacity={0.75}
        color="#B45309"
        originCenter
      />
      <ColoredSquare
        absolute
        left={423}
        top={348}
        size={74}
        radius={30}
        opacity={0.75}
        color="#A21CAF"
        originCenter
      />
      <ColoredSquare
        absolute
        left={530}
        top={368}
        size={218}
        radius={50}
        opacity={0.75}
        color="#BE185D"
        originCenter
      />
      <ColoredSquare
        absolute
        left={468}
        top={-74}
        width={60}
        color="#0369A1"
        originCenter
        rounded
      />
    </Main>
  );
};
