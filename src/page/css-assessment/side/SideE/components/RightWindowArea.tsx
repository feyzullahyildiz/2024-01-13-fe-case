import styled from "@emotion/styled";
import { MacWindow } from "../../../../../components";
import { MacWindow1PNG, MacWindow2PNG, MacWindow3PNG } from "../image";

const ImageContainer = styled.div`
  position: relative;
  max-width: min(70vw, 944px);
  min-width: 360px;
  width: 100%;
  flex: 1;
  z-index: 10;
`;

export const RightWindowArea = () => {
  return (
    <ImageContainer>
      <MacWindow
        maxImgWidth={"80%"}
        imgSrc={MacWindow1PNG}
        style={{
          position: "absolute",
        }}
      />
      <MacWindow
        maxImgWidth={"80%"}
        imgSrc={MacWindow2PNG}
        style={{
          position: "absolute",
          marginTop: "10%",
          marginLeft: "10%",
        }}
      />
      <MacWindow
        hideToolbar
        radius={8}
        maxImgWidth={"25%"}
        imgSrc={MacWindow3PNG}
        style={{
          marginTop: "20%",
          marginLeft: "75%",
          marginBottom: "10%",
        }}
      />
    </ImageContainer>
  );
};
