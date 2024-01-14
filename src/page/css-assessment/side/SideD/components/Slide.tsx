import { CSSProperties, FC, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { Cart } from "./Cart";
import { Avatar2, Avatar3, Avatar4, Avatar5 } from "./icon/avatars";
import { ShellsSVG, WavesSVG, ZoomerSVG, ArtVenueSVG } from "./icon/brand";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useWindowSize } from "../../../../../hooks";

interface Props {
  style?: CSSProperties;
}
export const Slide: FC<Props> = ({ style }) => {
  const size = useWindowSize();
  const totalItemCount = size.width / (384 + 24);
  const cards = useMemo(
    () => [
      {
        brand: "kontrastr",
        description:
          "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.",
        brandSrc: WavesSVG,
        avatarSrc: Avatar4,
      },
      {
        brand: "Zoomerr",
        description:
          "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
        brandSrc: ZoomerSVG,
        avatarSrc: Avatar2,
      },
      {
        brand: "SHELLS",
        description:
          "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
        brandSrc: ShellsSVG,
        avatarSrc: Avatar3,
      },
      {
        brand: "ArtVenue",
        description:
          "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
        brandSrc: ArtVenueSVG,
        avatarSrc: Avatar4,
      },
      {
        brand: "WAVES",
        description:
          "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
        brandSrc: WavesSVG,
        avatarSrc: Avatar5,
      },
    ],
    []
  );
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={totalItemCount}
      // freeMode={true}
      // pagination={{
      //   clickable: false,
      // }}
      modules={[FreeMode, Pagination]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      style={style}
    >
      {cards.map((cartData) => (
        <SwiperSlide key={cartData.brand} style={{ paddingBottom: "24px" }}>
          <Cart {...cartData} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
