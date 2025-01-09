import { MouseEvent } from "react";

export const chars = [
  { char: "H", x: -220, y: 0 },
  { char: "i", x: -175, y: 0 },
  { char: ",", x: -150, y: 0 },
  { char: "I", x: -95, y: 0 },
  { char: "'", x: -70, y: -5 },
  { char: "m", x: -20, y: 0 },
  { char: "B", x: 80, y: 0 },
  { char: "e", x: 135, y: 0 },
  { char: "n", x: 190, y: 0 },
  { char: "!", x: 230, y: 0 },
];

const charMap = Array.from(Array(10).keys()).map((i) => {
  return {
    char: chars[i].char,
    x: chars[i].x,
    y: chars[i].y,
    changedX: 0,
    changedY: 0,
  };
});

export const resetLetter = (i: number) => {
  charMap.splice(i, 1, { ...charMap[i], changedX: 0, changedY: 0 });
  const anchorX = window.innerWidth / 2 + charMap[i].x;
  const anchorY = window.innerHeight / 2 + charMap[i].y;
  const letter = document.getElementById(charMap[i].char);
  if (letter) {
    letter.style.position = "absolute";
    letter.style.left = anchorX + "px";
    letter.style.top = anchorY + "px";
  }
};

export const moveLetter = (event: MouseEvent, i: number) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const anchorX = window.innerWidth / 2 + charMap[i].x;
  const anchorY = window.innerHeight / 2 + charMap[i].y;
  const letter = document.getElementById(charMap[i].char);
  if (letter) {
    const rect = letter.getBoundingClientRect();
    const distanceX = mouseX - rect.x;
    const distanceY = mouseY - rect.y;
    const distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
    const power = 500;
    if (distance > power / 2) {
      resetLetter(i);
    } else {
      const newLetter = {
        ...charMap[i],
        changedX: (charMap[i].changedX + (anchorX - rect.x) / 2) / 2,
        changedY: (charMap[i].changedY + (anchorY - rect.y) / 2) / 2,
      };
      charMap.splice(i, 1, newLetter);
      const newX =
        rect.x -
        ((distanceX / distance) * power) / distance +
        charMap[i].changedX;
      const newY =
        rect.y -
        ((distanceY / distance) * power) / distance +
        charMap[i].changedY;
      letter.style.left = newX + "px";
      letter.style.top = newY + "px";
    }
  }
};
