import { MouseEvent, useEffect } from "react";
import { keyframes } from "tss-react";
import { makeStyles } from "tss-react/mui";
import { chars, moveLetter, resetLetter } from "./utils/letterUtils";
import { moveTab, resetTab } from "./utils/tabUtils";

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
  topLeftTab: {
    position: "absolute",
    top: 0,
    left: 0,
    background: "white",
  },
  topRightTab: {
    position: "absolute",
    top: 0,
    right: 0,
    background: "white",
  },
});

export const App = () => {
  const { classes } = useStyles();

  useEffect(() => {
    for (const i of Array.from(Array(9).keys())) resetLetter(i);
    resetTab("left");
    resetTab("right");
  }, []);

  const moveAll = (e: MouseEvent) => {
    for (const i of Array.from(Array(9).keys())) moveLetter(e, i);
    moveTab(e, "left");
    moveTab(e, "right");
  };

  return (
    <div className={classes.container} onMouseMove={moveAll}>
      <div id="left" className={classes.topLeftTab}></div>
      <div id="right" className={classes.topRightTab}></div>
      {chars.map((char) => (
        <div id={char.char}>
          <span className={classes.title}>{char.char}</span>
        </div>
      ))}
    </div>
  );
};
