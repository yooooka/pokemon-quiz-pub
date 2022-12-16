/** @jsxImportSource theme-ui */
import { keyframes } from "@emotion/react";
import { FC } from "react";
import { Box, Button, Container, useColorMode } from "theme-ui";
import { PikaEarSvg } from "../PikaEar";

export const Layout: FC<{ animate?: boolean }> = ({
  animate = false,
  children
}) => {
  const [colorMode, setColorMode] = useColorMode();
  const MIMI = keyframes`
  0%,
  100% {
    transform: translateX(0%);
    transform-origin: 50% 50%;
  }
  15% {
    transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    transform: translateX(15px) rotate(6deg);
  }
  45% {
    transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    transform: translateX(-6px) rotate(-1.2deg);
  }`;

  return (
    <Container px={4}>
      <Button
        title="Dark Mode Toggle"
        variant="gray"
        onClick={() => {
          setColorMode(colorMode === "light" ? "dark" : "light");
        }}
        sx={{
          width: "fit-content",
          position: "absolute",
          bottom: 3,
          right: 3
        }}
      >
        {colorMode === "light" ? "🌙" : "☀️"}
      </Button>
      <Box role="main" variant="layout.main">
        {children}
      </Box>
      <div
        sx={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: -1,
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <PikaEarSvg
          key={animate ? 1 : 2}
          sx={{
            height: "fit-content",
            width: [null, "50%", "50%"],
            animation: `${MIMI} 0.7s linear ${animate ? 1 : 0}`
          }}
        />
      </div>
    </Container>
  );
};
