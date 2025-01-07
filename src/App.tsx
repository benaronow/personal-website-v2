import { MouseEvent, useEffect } from "react";
import { keyframes } from "tss-react";
import { makeStyles } from "tss-react/mui";

const gradient = keyframes({
  "0%": {
    backgroundPosition: "0% 80%",
  },
  "100%": {
    backgroundPosition: "100% 20%",
  },
});

const useStyles = makeStyles()({
  container: {
    display: "flex",
    height: "100dvh",
    width: "100%",
    background:
      "linear-gradient(80deg, #e73c7e, #e73c7e, #FF6F91, #FF8C00, #FFB74D, #cad523, #3ed523, #23d5ab, #3ed523, #cad523, #FFB74D, #FF8C00, #FF6F91, #e73c7e, #e73c7e)",
    backgroundSize: "2200% 2200%",
    animation: `${gradient} 20s linear infinite`,
  },
  title: {
    position: "absolute",
    fontFamily: "Barlow Semi Condensed",
    fontSize: "85px",
    fontWeight: 900,
    textShadow: "5px 5px 2px black",
    transform: "translate(-50%, -50%)",
    color: "white",
  },
});

export const App = () => {
  const { classes } = useStyles();

  const chars = [
    { char: "H", x: -195, y: 0 },
    { char: "i", x: -150, y: 0 },
    { char: ",", x: -125, y: 0 },
    { char: "I", x: -70, y: 0 },
    { char: "'", x: -50, y: -5 },
    { char: "m", x: -5, y: 0 },
    { char: "B", x: 95, y: 0 },
    { char: "e", x: 145, y: 0 },
    { char: "n", x: 195, y: 0 },
  ];
  const charMap = Array.from(Array(9).keys()).map((i) => {
    return {
      char: chars[i].char,
      x: chars[i].x,
      y: chars[i].y,
      changedX: 0,
      changedY: 0,
    };
  });

  const resetLetter = (i: number) => {
    charMap.splice(i, 1, { ...charMap[i], changedX: 0, changedY: 0 });
    const anchorX = window.innerWidth / 2 + charMap[i].x;
    const anchorY = window.innerHeight / 2 + charMap[i].y;
    const letter = document.getElementById(charMap[i].char);
    if (letter) {
      const width = letter.style.width;
      const height = letter.style.height;
      console.log(width, height);
      letter.style.position = "absolute";
      letter.style.left = anchorX + "px";
      letter.style.top = anchorY + "px";
    }
  };

  useEffect(() => {
    for (const id of Array.from(Array(9).keys())) resetLetter(id);
  }, []);

  const move = (event: MouseEvent, i: number) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const anchorX = window.innerWidth / 2 + charMap[i].x;
    const anchorY = window.innerHeight / 2 + charMap[i].y;
    const letter = document.getElementById(charMap[i].char);
    if (letter) {
      const rect = letter.getBoundingClientRect();
      const distanceX = mouseX - rect.x;
      const distanceY = mouseY - rect.y;
      const distance = Math.sqrt(
        Math.pow(distanceX, 2) + Math.pow(distanceY, 2)
      );
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

  const moveAll = (e: MouseEvent) => {
    for (const id of Array.from(Array(9).keys())) move(e, id);
  };

  return (
    <div className={classes.container} onMouseMove={moveAll}>
      {chars.map((char) => (
        <div id={char.char}>
          <span className={classes.title}>{char.char}</span>
        </div>
      ))}
    </div>
  );
};
