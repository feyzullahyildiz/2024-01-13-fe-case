import syled from "@emotion/styled";
import React, { useMemo } from "react";
import { useIsMobile } from "../hooks";

type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

interface SharedProps extends DivProps {
  children?: React.ReactNode;

  vertical?: boolean;
  horizontal?: boolean;
  gap?: string;
  alignCenter?: boolean;

  noPadding?: boolean;
  flexWrap?: string;
  justify?: string;
}
interface MainContainerProps extends SharedProps {
  padding?: string;
}
interface Props extends SharedProps {
  justifyCenterIfMobile?: boolean;
  wrap?: boolean;
  wrapIfMobile?: boolean;
  noWrap?: boolean;
}
const MainContainer = syled.div<MainContainerProps>`
  position: relative;
  padding: ${(props) => props.padding} ;
  width: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  flex-direction: ${(props) => (props.vertical ? "column" : "row")};
  flex-wrap: ${(props) => props.flexWrap};
  gap: ${(props) => props.gap || "0"};
  align-items: ${(props) => (props.alignCenter ? "center" : "inherit")};
  justify-content: ${(props) => props.justify || "inherit"};
`;
export const Container: React.FC<Props> = ({
  noPadding,
  justify,
  justifyCenterIfMobile,
  wrap,
  wrapIfMobile,
  noWrap,
  ...props
}) => {
  const isMobile = useIsMobile();

  const padding = useMemo(() => {
    const defaultPadding = isMobile ? "16px" : "30.5px 80px";
    return noPadding ? "0" : defaultPadding;
  }, [noPadding, isMobile]);

  const justifyValue = useMemo(() => {
    const isCenterDefault = isMobile && justifyCenterIfMobile;
    if (isCenterDefault) {
      return "center";
    }
    return justify || "inherit";
  }, [justify, justifyCenterIfMobile, isMobile]);

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

  return (
    <MainContainer
      flexWrap={flexWrap}
      justify={justifyValue}
      padding={padding}
      {...props}
    />
  );
};
