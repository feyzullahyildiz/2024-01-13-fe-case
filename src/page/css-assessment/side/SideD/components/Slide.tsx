import { CSSProperties, FC, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { Cart } from "./Cart";
import { Avatar2, Avatar3, Avatar4, Avatar5 } from "./icon/avatars";
import { ShellsSVG, WavesSVG, ZoomerSVG, ArtVenueSVG } from "./icon/brand";


import { useWindowSize } from "../../../../../hooks";

interface Props {
  style?: CSSProperties;
}
export const Slide: FC<Props> = ({ style }) => {
  const size = useWindowSize();
  const totalItemCount = Math.min(4, size.width / (384 + 24));
  const cards = useMemo(
    () => [
      {
        brand: "kontrastr",
        description:
          "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.",
        brandSrc: WavesSVG,
        avatarSrc: Avatar4,
        userName: "Ralph Edwards",
        userTitle: "Product Designer",
      },
      {
        brand: "Zoomerr",
        description:
          "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
        brandSrc: ZoomerSVG,
        avatarSrc: Avatar2,
        userName: "Hellen Jummy",
        userTitle: "Team Lead",
      },
      {
        brand: "SHELLS",
        description:
          "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
        brandSrc: ShellsSVG,
        avatarSrc: Avatar3,
        userName: "Hellena John",
        userTitle: "Co-founder",
      },
      {
        brand: "ArtVenue",
        description:
          "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
        brandSrc: ArtVenueSVG,
        avatarSrc: Avatar4,
        userName: "David Oshodi",
        userTitle: "Manager",
      },
      {
        brand: "WAVES",
        description:
          "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
        brandSrc: WavesSVG,
        avatarSrc: Avatar5,
        userName: "Charolette Hanlin",
        userTitle: "CEO",
      },
    ],
    []
  );
  // console.log("totalItemCount", totalItemCount);
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={totalItemCount}
      modules={[FreeMode, Pagination]}
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
