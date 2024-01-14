import { Theme } from "@emotion/react";

interface Options {
  backgroundPrimary?: string;
}
export const getTheme = (
  defaultFontColor = "black",
  defaultLinkColor = "#78350F",
  opt: Options = {}
): Theme => {
  const backgroundPrimary = opt.backgroundPrimary || "#fffbeb";
  return {
    color: {
      color: defaultFontColor,
      link: defaultLinkColor,
    },
    background: {
      primary: backgroundPrimary,
    },
  };
};
