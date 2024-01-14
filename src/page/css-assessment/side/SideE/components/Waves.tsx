import styled from "@emotion/styled";
import {
  BackgroundWave1SVG,
  BackgroundWave2SVG,
  BackgroundWave3SVG,
} from "../image";

const WaveImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
`;

export const Waves = () => {
  return (
    <>
      <WaveImg src={BackgroundWave3SVG} />
      <WaveImg src={BackgroundWave2SVG} />
      <WaveImg src={BackgroundWave1SVG} />
    </>
  );
};
