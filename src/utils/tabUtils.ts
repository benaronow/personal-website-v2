import { Theme } from "@mui/material";
import { MouseEvent } from "react";

export const resetTab = (id: string, theme: Theme) => {
  const tab = document.getElementById(`${id}Tab`);
  const tabName = document.getElementById(`${id}Name`);
  const width = window.innerWidth;
  if (tab && tabName) {
    tab.style.width = 150 + "px";
    tab.style.height = 150 + "px";
    tab.style.borderRadius = 75 + "px";
    tab.style.transform = `translate(${id === "left" ? "-" : ""}75px, -75px)`;
    tabName.style.width = 53 + "px";
    tabName.style.height = 53 + "px";
    tabName.style.fontSize = 17 + "px";
    tabName.style.fontSize = 17 + "px";
    if (width > theme.breakpoints.values["md"]) {
      tabName.style.opacity = 0 + "%";
      tabName.style.animation = "";
    } else {
      tabName.style.opacity = 100 + "%";
      tabName.style.animation = "none";
    }
  }
};

export const moveTab = (event: MouseEvent, id: string, theme: Theme) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const tab = document.getElementById(`${id}Tab`);
  const tabName = document.getElementById(`${id}Name`);
  if (tab && tabName) {
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
      const leg = (Math.min(newWidth, newHeight) / 2 / 2) * Math.sqrt(2);
      tabName.style.width = leg + "px";
      tabName.style.height = leg + "px";
      tabName.style.fontSize = leg / 3 + "px";
      tabName.style.fontSize = leg / 3 + "px";
      tabName.style.opacity = ((leg - 53) / 88) * 100 + "%";
      tab.style.borderRadius =
        Math.max(parseInt(tab.style.width), parseInt(tab.style.height)) / 2 +
        "px";
      tab.style.transform = `translate(${id === "left" ? "-" : ""}${
        parseInt(tab.style.width) / 2
      }px, -${parseInt(tab.style.height) / 2}px)`;
      return distance < 200;
    } else {
      resetTab(id, theme);
      tabName.style.fontSize = 17 + "px";
      tabName.style.fontSize = 17 + "px";
      tabName.style.opacity = 0 + "%";
      return false;
    }
  }
  return false;
};
