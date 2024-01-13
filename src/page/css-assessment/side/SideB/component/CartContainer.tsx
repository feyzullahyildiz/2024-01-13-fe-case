import { ImageCart, Container } from "../../../../../components";
import { Img1, Img2, Img3 } from "./image";

export const CartContainer = () => {
  return (
    <Container
      noPadding
      horizontal
      wrap
      gap="46px"
      wrapIfMobile
      justifyCenterIfMobile
    >
      <ImageCart imgSrc={Img1} />
      <ImageCart imgSrc={Img2} />
      <ImageCart imgSrc={Img3} />
    </Container>
  );
};
