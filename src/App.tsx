import { MouseEvent, useEffect, useState } from "react";
import { chars, moveLetter, resetLetter } from "./utils/letterUtils";
import { moveTab, resetTab } from "./utils/tabUtils";
import Github from "./assets/github.png";
import LinkedIn from "./assets/linkedin.png";
import { moveLogo } from "./utils/logoUtils";
import { useStyles } from "./useStyles";
import { Forward } from "@mui/icons-material";
import { isInOverlay } from "./utils/overlayUtils";

export const App = () => {
  const { classes } = useStyles();
  const [leftIn, setLeftIn] = useState(false);
  const [rightIn, setRightIn] = useState(false);
  const [leftOpen, setLeftOpen] = useState<boolean | undefined>(undefined);
  const [rightOpen, setRightOpen] = useState<boolean | undefined>(undefined);
  const [githubIn, setGithubIn] = useState<boolean | undefined>(undefined);
  const [linkedinIn, setLinkedinIn] = useState<boolean | undefined>(undefined);
  const [inLeftOverlay, setInLeftOverlay] = useState(false);
  const [inRightOverlay, setInRightOverlay] = useState(false);

  useEffect(() => {
    for (const i of Array.from(Array(9).keys())) resetLetter(i);
    resetTab("left");
    resetTab("right");
  }, []);

  const handleLeftClick = () => {
    setLeftOpen(true);
    setTimeout(() => {
      setLeftIn(false);
      resetTab("left");
    }, 500);
  };

  const handleRightClick = () => {
    setRightOpen(true);
    setTimeout(() => {
      setRightIn(false);
      resetTab("right");
    }, 500);
  };

  const handleOverlayClick = () => {
    if (leftOpen) {
      setLeftOpen(false);
      setInLeftOverlay(false);
    }
    if (rightOpen) {
      setRightOpen(false);
      setInRightOverlay(false);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!leftOpen && !rightOpen) {
      for (const i of Array.from(Array(9).keys())) moveLetter(e, i);
      setLeftIn(moveTab(e, "left"));
      setRightIn(moveTab(e, "right"));
      const inGithub = moveLogo(e, "github");
      inGithub ? setGithubIn(inGithub) : githubIn && setGithubIn(inGithub);
      const inLinkedin = moveLogo(e, "linkedin");
      inLinkedin
        ? setLinkedinIn(inLinkedin)
        : linkedinIn && setLinkedinIn(inLinkedin);
    } else {
      setInLeftOverlay(isInOverlay(e) === "left");
      setInRightOverlay(isInOverlay(e) === "right");
    }
  };

  return (
    <div className={classes.container} onMouseMove={handleMouseMove}>
      <div
        id="left"
        className={`${classes.leftTab} ${leftIn && classes.leftIn}`}
        onClick={handleLeftClick}
      ></div>
      <div id="leftName" className={classes.leftName} onClick={handleLeftClick}>
        <span>About</span>
        <span>Me</span>
      </div>
      <div
        className={`${classes.leftPage} ${
          leftOpen
            ? classes.leftPageIn
            : leftOpen === false && classes.leftPageOut
        }`}
      ></div>
      <Forward
        className={`${classes.leftArrow} ${
          leftOpen
            ? classes.leftArrowIn
            : leftOpen === false && classes.leftArrowOut
        } ${inLeftOverlay && classes.inLeftOverlay}`}
      ></Forward>
      <div
        id="right"
        className={`${classes.rightTab} ${rightIn && classes.rightIn}`}
        onClick={handleRightClick}
      ></div>
      <div
        id="rightName"
        className={classes.rightName}
        onClick={handleRightClick}
      >
        <span>My</span>
        <span>Work</span>
      </div>
      <div
        className={`${classes.rightPage} ${
          rightOpen
            ? classes.rightPageIn
            : rightOpen === false && classes.rightPageOut
        }`}
      ></div>
      <Forward
        className={`${classes.rightArrow} ${
          rightOpen
            ? classes.rightArrowIn
            : rightOpen === false && classes.rightArrowOut
        } ${inRightOverlay && classes.inRightOverlay}`}
      ></Forward>
      {chars.map((char) => (
        <div id={char.char}>
          <span className={classes.title}>{char.char}</span>
        </div>
      ))}
      <a href="https://github.com/benaronow" target="_blank">
        <img
          id="github"
          className={`${classes.github} ${
            githubIn
              ? classes.githubIn
              : githubIn === false && classes.githubOut
          }`}
          src={Github}
        />
      </a>
      <a href="https://www.linkedin.com/in/benaronow/" target="_blank">
        <img
          id="linkedin"
          className={`${classes.linkedin} ${
            linkedinIn
              ? classes.linkedinIn
              : linkedinIn === false && classes.linkedinOut
          }`}
          src={LinkedIn}
        />
      </a>
      <div
        className={`${classes.overlay} ${
          leftOpen || rightOpen
            ? `${classes.overlayIn} ${classes.overlayHover}`
            : classes.overlayOut
        }`}
        onClick={handleOverlayClick}
      ></div>
    </div>
  );
};
