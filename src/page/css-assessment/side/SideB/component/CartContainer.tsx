import React from "react";
import { Cart, Container } from "../../../../../components";
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
      <Cart imgSrc={Img1} />
      <Cart imgSrc={Img2} />
      <Cart imgSrc={Img3} />
    </Container>
  );
};
