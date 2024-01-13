import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      color: string;
      link: string;
    };
  }
}
