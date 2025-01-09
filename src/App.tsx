import { MouseEvent, useEffect, useState } from "react";
import { moveLetter, resetLetter } from "./utils/letterUtils";
import { moveTab, resetTab } from "./utils/tabUtils";
import { moveLogo } from "./utils/logoUtils";
import { isInOverlay } from "./utils/overlayUtils";
import { LeftPage } from "./components/leftPage";
import { RightPage } from "./components/rightPage";
import { Github } from "./components/github";
import { Linkedin } from "./components/linkedin";
import { LeftName } from "./components/leftName";
import { RightName } from "./components/rightName";
import { LeftTab } from "./components/leftTab";
import { RightTab } from "./components/rightTab";
import { LeftArrow } from "./components/leftArrow";
import { RightArrow } from "./components/rightArrow";
import { Overlay } from "./components/overlay";
import { Letters } from "./components/letters";
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
    width: "100dvw",
    background:
      "linear-gradient(80deg, #e73c7e, #e73c7e, #FF6F91, #FF8C00, #FFB74D, #cad523, #3ed523, #23d5ab, #23d5ab, #3ed523, #cad523, #FFB74D, #FF8C00, #FF6F91, #e73c7e, #e73c7e)",
    backgroundSize: "2200% 2200%",
    animation: `${gradient} 20s linear infinite`,
    overflow: "hidden",
    position: "relative",
  },
});

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
    for (const i of Array.from(Array(10).keys())) resetLetter(i);
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
      for (const i of Array.from(Array(10).keys())) moveLetter(e, i);
      setLeftIn(moveTab(e, "left"));
      setRightIn(moveTab(e, "right"));
      const inGithub = moveLogo(e, "github");
      if (inGithub) {
        setGithubIn(inGithub);
      } else if (githubIn) setGithubIn(inGithub);
      const inLinkedin = moveLogo(e, "linkedin");
      if (inLinkedin) {
        setLinkedinIn(inLinkedin);
      } else if (linkedinIn) setLinkedinIn(inLinkedin);
    } else {
      setInLeftOverlay(isInOverlay(e) === "left");
      setInRightOverlay(isInOverlay(e) === "right");
    }
  };

  return (
    <div className={classes.container} onMouseMove={handleMouseMove}>
      <LeftTab leftIn={leftIn} handleLeftClick={handleLeftClick} />
      <LeftName leftIn={leftIn} handleLeftClick={handleLeftClick} />
      <LeftPage leftOpen={leftOpen} />
      <LeftArrow
        leftOpen={leftOpen}
        inLeftOverlay={inLeftOverlay}
        handleOverlayClick={handleOverlayClick}
      />
      <RightTab rightIn={rightIn} handleRightClick={handleRightClick} />
      <RightName rightIn={rightIn} handleRightClick={handleRightClick} />
      <RightPage rightOpen={rightOpen} />
      <RightArrow
        rightOpen={rightOpen}
        inRightOverlay={inRightOverlay}
        handleOverlayClick={handleOverlayClick}
      />
      <Letters />
      <Github githubIn={githubIn} />
      <Linkedin linkedinIn={linkedinIn} />
      <Overlay
        leftOpen={leftOpen}
        rightOpen={rightOpen}
        handleOverlayClick={handleOverlayClick}
      />
    </div>
  );
};
