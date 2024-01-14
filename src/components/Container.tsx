import syled from "@emotion/styled";
import React, { useMemo } from "react";
import { useIsMobile } from "../hooks";

type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

interface SharedProps extends DivProps {
  children?: React.ReactNode;

  gap?: string;
  alignCenter?: boolean;

  noPadding?: boolean;
  flexWrap?: string;
  justify?: string;
  alignItems?: string;
  padding?: string;
}
interface MainContainerProps extends SharedProps {
  flexDirection: string;
}
interface Props extends SharedProps {
  alignCenterIfMobile?: boolean;
  justifyCenterIfMobile?: boolean;
  wrap?: boolean;
  wrapIfMobile?: boolean;
  noWrap?: boolean;
  paddingTopBottom?: string;
  mobilePadding?: string;
  verticalIfMobile?: boolean;
  vertical?: boolean;
  horizontal?: boolean;
}
const MainContainer = syled.div<MainContainerProps>`
  position: relative;
  padding: ${(props) => props.padding} ;
  width: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap};
  gap: ${(props) => props.gap || "0"};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justify || "inherit"};
`;
export const Container: React.FC<Props> = ({
  alignItems,
  alignCenter,
  alignCenterIfMobile,
  noPadding,
  justify,
  justifyCenterIfMobile,
  wrap,
  wrapIfMobile,
  noWrap,
  padding,
  mobilePadding,
  paddingTopBottom,
  verticalIfMobile,
  vertical,
  horizontal,
  ...props
}) => {
  const isMobile = useIsMobile();

  const paddingValue = useMemo(() => {
    if (mobilePadding && isMobile) {
      return mobilePadding;
    }
    if (padding) {
      return padding;
    }
    const defaultPadding = isMobile
      ? "16px"
      : `${paddingTopBottom || "30.5px"} 80px`;
    return noPadding ? "0" : defaultPadding;
  }, [padding, noPadding, paddingTopBottom, mobilePadding, isMobile]);

  const justifyValue = useMemo(() => {
    const isCenterDefault = isMobile && justifyCenterIfMobile;
    if (isCenterDefault) {
      return "center";
    }
    return justify || "inherit";
  }, [justify, justifyCenterIfMobile, isMobile]);

  const alignItemsValue = useMemo(() => {
    if (alignCenterIfMobile && isMobile) {
      return "center";
    }
    if (alignCenter) {
      return "center";
    }
    return alignItems || "inherit";
  }, [alignCenter, alignCenterIfMobile, alignItems, isMobile]);

  const flexWrap = useMemo(() => {
    const isWrap = (isMobile && wrapIfMobile) || wrap;
    if (isWrap) {
      return "wrap";
    }
    if (noWrap) {
      return "no-wrap";
    }
    return "inherit";
  }, [wrap, noWrap, wrapIfMobile, isMobile]);

  const flexDirection = useMemo(() => {
    if (verticalIfMobile && isMobile) {
      return "column";
    }
    if (vertical) {
      return "column";
    }

    if (horizontal) {
      return "row";
    }
    return "row";
  }, [isMobile, verticalIfMobile, vertical, horizontal]);
  return (
    <MainContainer
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      justify={justifyValue}
      alignItems={alignItemsValue}
      padding={paddingValue}
      {...props}
    />
  );
};
