import { Theme } from "@emotion/react";

export const getTheme = (
  defaultFontColor = "black",
  defaultLinkColor = "#78350F"
): Theme => {
  return {
    color: {
      color: defaultFontColor,
      link: defaultLinkColor,
    },
    background: {
      primary: "#fffbeb",
    },
  };
};
