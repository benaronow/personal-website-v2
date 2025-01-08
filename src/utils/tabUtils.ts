import { MouseEvent } from "react";

export const resetTab = (id: string) => {
  const tab = document.getElementById(id);
  if (tab) {
    tab.style.width = 150 + "px";
    tab.style.height = 150 + "px";
    tab.style.borderRadius = 75 + "px";
    tab.style.transform = `translate(${id === "left" ? "-" : ""}75px, -75px)`;
  }
};

export const moveTab = (event: MouseEvent, id: string) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const tab = document.getElementById(id);
  if (tab) {
    const distanceX = Math.abs(
      mouseX - (id === "left" ? 0 : window.innerWidth)
    );
    const distanceY = mouseY;
    const distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
    if (distanceX < 400 && distanceY < 400) {
      const w = distanceY - distanceX;
      const h = distanceX - distanceY;
      const powX =
        (1 - Math.max(0, distance - 200) / 200) * (1 + (-w + 400) / 200);
      const powY =
        (1 - Math.max(0, distance - 200) / 200) * (1 + (-h + 400) / 200);
      const newWidth = Math.min(400, Math.max(150, 150 + 100 * powX));
      const newHeight = Math.min(400, Math.max(150, 150 + 100 * powY));
      tab.style.width = newWidth + "px";
      tab.style.height = newHeight + "px";
      tab.style.borderRadius = parseInt(tab.style.height) / 2 + "px";
      tab.style.transform = `translate(${id === "left" ? "-" : ""}${
        parseInt(tab.style.width) / 2
      }px, -${parseInt(tab.style.height) / 2}px)`;
    } else {
      resetTab(id);
    }
  }
};