import { MouseEvent } from "react";

export const moveLogo = (event: MouseEvent, id: string) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const logo = document.getElementById(id);
  if (logo) {
    const distanceX = mouseX - (id === "github" ? 0 : window.innerWidth);
    const distanceY = mouseY - window.innerHeight;
    const distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
    return distance < 200;
  }
  return false;
};
