import emotionStyled from "@emotion/styled";
import { ImageCart, Container } from "../../../../../components";
import { Img1, Img2, Img3, ShopCartSVG } from "./image";

const ButtonContent = emotionStyled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;
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
      <ImageCart
        title="Title"
        desc="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
        imgSrc={Img1}
        buttonContent={
          <ButtonContent>
            <img src={ShopCartSVG} />
            Buy Now
          </ButtonContent>
        }
      />
      <ImageCart
        title="Title"
        desc="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
        imgSrc={Img2}
        buttonContent={
          <ButtonContent>
            <img src={ShopCartSVG} />
            Buy Now
          </ButtonContent>
        }
      />
      <ImageCart
        title="Title"
        desc="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
        imgSrc={Img3}
        buttonContent={
          <ButtonContent>
            <img src={ShopCartSVG} />
            Buy Now
          </ButtonContent>
        }
      />
    </Container>
  );
};
