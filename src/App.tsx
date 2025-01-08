import { MouseEvent, useEffect, useState } from "react";
import { keyframes } from "tss-react";
import { makeStyles } from "tss-react/mui";
import { chars, moveLetter, resetLetter } from "./utils/letterUtils";
import { moveTab, resetTab } from "./utils/tabUtils";
import Github from "./assets/github.png";
import LinkedIn from "./assets/linkedin.png";
import { moveLogo } from "./utils/logoUtils";

const gradient = keyframes({
  "0%": {
    backgroundPosition: "0% 80%",
  },
  "100%": {
    backgroundPosition: "100% 20%",
  },
});

const githubIn = keyframes({
  "0%": {
    height: "80px",
    width: "80px",
    transform: "rotate(-360deg)",
  },
  "100%": {
    bottom: 20,
    right: 20,
    height: "160px",
    width: "160px",
    borderRadius: "80px",
    transform: "rotate(0deg)",
  },
});

const githubOut = keyframes({
  "0%": {
    height: "160px",
    width: "160px",
    borderRadius: "80px",
    transform: "rotate(360deg)",
  },
  "100%": {
    bottom: 10,
    right: 10,
    height: "80px",
    width: "80px",
    borderRadius: "40px",
    transform: "rotate(0deg)",
  },
});

const linkedinIn = keyframes({
  "0%": {
    height: "80px",
    width: "80px",
    transform: "rotate(0deg)",
  },
  "100%": {
    bottom: 20,
    right: 20,
    height: "160px",
    width: "160px",
    borderRadius: "80px",
    transform: "rotate(-360deg)",
  },
});

const linkedinOut = keyframes({
  "0%": {
    height: "160px",
    width: "160px",
    borderRadius: "80px",
    transform: "rotate(0deg)",
  },
  "100%": {
    bottom: 10,
    right: 10,
    height: "80px",
    width: "80px",
    borderRadius: "40px",
    transform: "rotate(360deg)",
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
    textShadow: "0px 10px 7px black",
    transform: "translate(-50%, -50%)",
    color: "white",
  },
  topLeftTab: {
    position: "absolute",
    top: 0,
    left: 0,
    background: "white",
    boxShadow: "5px 10px 30px black",
    "&:hover": {
      cursor: "pointer",
    },
  },
  topRightTab: {
    position: "absolute",
    top: 0,
    right: 0,
    background: "white",
    boxShadow: "-5px 10px 30px black",
    "&:hover": {
      cursor: "pointer",
    },
  },
  github: {
    position: "absolute",
    bottom: 10,
    left: 10,
    height: "80px",
    width: "80px",
    boxShadow: "0px 10px 30px black",
    borderRadius: "40px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  githubIn: {
    animation: `${githubIn} 0.5s forwards`,
  },
  githubOut: {
    animation: `${githubOut} 0.5s forwards`,
  },
  linkedin: {
    position: "absolute",
    bottom: 10,
    right: 10,
    height: "80px",
    width: "80px",
    boxShadow: "0px 10px 30px black",
    borderRadius: "40px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  linkedinIn: {
    animation: `${linkedinIn} 0.5s forwards`,
  },
  linkedinOut: {
    animation: `${linkedinOut} 0.5s forwards`,
  },
});

export const App = () => {
  const { classes } = useStyles();

  const [githubIn, setGithubIn] = useState(false);
  const [linkedinIn, setLinkedinIn] = useState(false);

  useEffect(() => {
    for (const i of Array.from(Array(9).keys())) resetLetter(i);
    resetTab("left");
    resetTab("right");
  }, []);

  const moveAll = (e: MouseEvent) => {
    for (const i of Array.from(Array(9).keys())) moveLetter(e, i);
    moveTab(e, "left");
    moveTab(e, "right");
    setGithubIn(moveLogo(e, "github"));
    setLinkedinIn(moveLogo(e, "linkedin"));
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
      <img
        id="github"
        className={`${classes.github} ${
          githubIn ? classes.githubIn : classes.githubOut
        }`}
        src={Github}
      />
      <img
        id="linkedin"
        className={`${classes.linkedin} ${
          linkedinIn ? classes.linkedinIn : classes.linkedinOut
        }`}
        src={LinkedIn}
      />
    </div>
  );
};
