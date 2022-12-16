/** @jsxImportSource theme-ui */
import type { Theme } from "theme-ui";

enum pikachuPalette {
  Yellow = "#FAD61D",
  LightYellow = "#fce468",
  Orange = "#E19720",
  Red = "#c94836",
  Copper = "#A36135"
}

export const makeTheme: Theme = {
  config: {
    initialColorModeName: "light",
    useColorSchemeMediaQuery: false
  },
  colors: {
    text: "#111",
    background: pikachuPalette.Yellow,
    primary: pikachuPalette.Red,
    primaryLink: pikachuPalette.Red,
    secondary: "#111",
    copper: pikachuPalette.Copper,
    muted: "#f6f6f6",
    gray: "#555",
    response: pikachuPalette.LightYellow,
    responseTxt: "#111",
    responseHover: pikachuPalette.Copper,
    modes: {
      dark: {
        text: pikachuPalette.Yellow,
        primaryLink: "#eee",
        background: "#111",
        secondary: "#eee",
        response: pikachuPalette.Yellow,
        responseTxt: "#111"
      }
    }
  },
  layout: {
    container: {
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      flexFlow: "column",
      justifyContent: "center",
      minHeight: "100vh",
      position: "relative"
    },
    main: {
      display: "flex",
      flexDirection: "column",
      minHeight: "300px",
      mx: "auto",
      my: 4,
      justifyContent: "center",
      width: ["100%", "100%", "50%"],
      textAlign: "center"
    }
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  buttons: {
    primary: {
      bg: "primary",
      cursor: "pointer",
      ":hover": {
        color: "white",
        bg: pikachuPalette.Orange
      },
      ":disabled": {
        pointerEvents: "none"
      }
    },
    secondary: {
      variant: "buttons.primary",
      bg: "secondary"
    },
    gray: {
      variant: "buttons.primary",
      bg: "gray",
      ":hover": {
        bg: "gray"
      }
    },
    copper: {
      variant: "buttons.primary",
      bg: "copper"
    },
    response: {
      variant: "buttons.primary",
      bg: "response",
      color: "responseTxt",
      ":hover": {
        color: "white",
        bg: "responseHover"
      }
    },
    selected: {
      bg: "responseHover"
    },
    icon: {
      width: 4,
      height: 4
    }
  },
  forms: {
    label: {
      display: "flex",
      height: "100%",
      cursor: "pointer",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 4,
      border: "1px solid",
      borderColor: "lightYellow",
      bg: "background",
      px: 4,
      py: 2,
      ":hover": {
        color: "white",
        bg: "copper"
      }
    }
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      a: {
        color: "primaryLink",
        ":hover": {
          textDecoration: "none"
        }
      }
    },
    pikaear: {
      position: "absolute",
      bottom: "0px",
      left: "50%",
      transform: "translateX(-50%)",
      height: "fit-content",
      zIndex: -1,
      width: [null, null, "50%"]
    },
    img: {
      maxWidth: "100%"
    }
  },
  text: {
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
      pb: 4
    },
    h2: {
      variant: "text.h1",
      fontSize: 4,
      pb: 2
    },
    h3: {
      variant: "text.h1",
      fontSize: 3,
      pb: 2
    },
    h4: {
      variant: "text.h1",
      fontSize: 2
    },
    h5: {
      variant: "text.h1",
      fontSize: 1
    },
    h6: {
      variant: "text.h1",
      fontSize: 0
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      pb: 2
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit"
      }
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit"
    },
    smaller: {
      variant: "text.p",
      fontSize: 14
    }
  }
};
