import { MouseEvent } from "react";

export const isInOverlay = (event: MouseEvent) => {
  const mouseX = event.clientX;
  const screenWidth = window.innerWidth;
  if (mouseX < screenWidth * 0.15) return "right";
  if (mouseX > screenWidth * 0.85) return "left";
  return "";
};
