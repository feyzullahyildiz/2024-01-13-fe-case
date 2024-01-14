import { useMemo, useState } from "react";
import styled from "@emotion/styled";
import {
  ArrowSVG,
  AntennaSVG,
  EqualizerSVG,
  MonitorSVG,
  RocketSVG,
  SearchSVG,
  SecureSVG,
} from "../image";
import { useIsMobile, useWindowSize } from "../../../../../hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

const Main = styled.span<{ isMobile: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? "row" : "column")};
  gap: 16px;
  min-width: 240px;
`;
const ListItem = styled.span<{ selected?: boolean }>`
  //   width: 100%;
  width: 280px;
  display: flex;
  font-size: 20px;
  font-weight: 500;
  padding: 8px 16px;
  gap: 16px;
  border-radius: 8px;
  cursor: pointer;
  align-items: center;
  background: ${(props) => (props.selected ? "white" : "inherit")};
  box-shadow: ${(props) =>
    props.selected
      ? "0px 0px 4px 0px rgba(0, 0, 0, 0.07), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)"
      : "inherit"};
`;

const SelectedArrowContainer = styled.div`
  display: flex;
    flex: 1;
  justify-content: flex-end;
`;

const IMGSelectedItemArrow = styled.img`
  width: 14px;
  height: 14px;
`;

export const List = () => {
    const size = useWindowSize();
  const isMobile = useIsMobile();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const items = useMemo(
    () => [
      {
        text: "Bibendum tellus",
        icon: SearchSVG,
      },
      {
        text: "Cras eget",
        icon: SecureSVG,
      },
      {
        text: "Dolor pharetra",
        icon: RocketSVG,
      },
      {
        text: "Amet, fringilla",
        icon: MonitorSVG,
      },
      {
        text: "Amet nibh",
        icon: AntennaSVG,
      },
      {
        text: "Sed velit",
        icon: EqualizerSVG,
      },
    ],
    []
  );
  const totalItemCount = Math.min(3, size.width / (320 + 24));
  if (isMobile) {
    return (
      <Swiper
        spaceBetween={48}
        slidesPerView={totalItemCount}
        style={{ maxWidth: "80vw", paddingBottom: 16 }}
        modules={[FreeMode, Pagination]}
      >
        {items.map((item, index) => {
          const selected = selectedIndex === index;
          return (
            <SwiperSlide key={index}>
              <ListItem
                selected={selected}
                onClick={() => setSelectedIndex(index)}
              >
                <img src={item.icon} />
                {item.text}
                {selected && (
                <SelectedArrowContainer>
                  <IMGSelectedItemArrow src={ArrowSVG} />
                </SelectedArrowContainer>
              )}
              </ListItem>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }
  return (
    <Main isMobile={isMobile}>
      {items.map((item, index) => {
        const selected = selectedIndex === index;
        return (
          <ListItem
            key={index}
            selected={selected}
            onClick={() => setSelectedIndex(index)}
          >
            <img src={item.icon} />
            {item.text}
            {selected && (
              <SelectedArrowContainer>
                <IMGSelectedItemArrow src={ArrowSVG} />
              </SelectedArrowContainer>
            )}
          </ListItem>
        );
      })}
    </Main>
  );
};
