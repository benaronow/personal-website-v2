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

const leftIn = keyframes({
  "0%": {
    background: "white",
  },
  "50%": {
    background: "#CF9FFF",
  },
  "100%": {
    background: "white",
  },
});

const leftPageIn = keyframes({
  "0%": {
    transform: "translateX(-100%)",
  },
  "100%": {
    transform: "translateX(0%)",
  },
});

const leftPageOut = keyframes({
  "0%": {
    transform: "translateX(0%)",
  },
  "100%": {
    transform: "translateX(-100%)",
  },
});

const leftArrowIn = keyframes({
  "0%": {
    transform:
      "rotate(180deg) translate(calc(-7.5dvw - 100%), calc(-50dvh + 50%))",
  },
  "100%": {
    transform: "rotate(180deg) translate(-50%, calc(-50dvh + 50%))",
  },
});

const leftArrowOut = keyframes({
  "0%": {
    transform: "rotate(180deg) translate(-50%, calc(-50dvh + 50%))",
  },
  "100%": {
    transform:
      "rotate(180deg) translate(calc(-7.5dvw - 100%), calc(-50dvh + 50%))",
  },
});

const rightIn = keyframes({
  "0%": {
    background: "white",
  },
  "50%": {
    background: "#CF9FFF",
  },
  "100%": {
    background: "white",
  },
});

const rightPageIn = keyframes({
  "0%": {
    transform: "translateX(100%)",
  },
  "100%": {
    transform: "translateX(0%)",
  },
});

const rightPageOut = keyframes({
  "0%": {
    transform: "translateX(0%)",
  },
  "100%": {
    transform: "translateX(100%)",
  },
});

const rightArrowIn = keyframes({
  "0%": {
    transform: "translate(calc(-7.5dvw - 100%), calc(50dvh - 50%))",
  },
  "100%": {
    transform: "translate(-50%, calc(50dvh - 50%))",
  },
});

const rightArrowOut = keyframes({
  "0%": {
    transform: "translate(-50%, calc(50dvh - 50%))",
  },
  "100%": {
    transform: "translate(calc(-7.5dvw - 100%), calc(50dvh - 50%))",
  },
});

const githubIn = keyframes({
  "0%": {
    height: "90px",
    width: "90px",
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

const githubBgIn = keyframes({
  "0%": {
    background: "transparent",
  },
  "50%": {
    background: "#CF9FFF",
  },
  "100%": {
    background: "transparent",
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
    height: "90px",
    width: "90px",
    borderRadius: "45px",
    transform: "rotate(0deg)",
  },
});

const linkedinIn = keyframes({
  "0%": {
    height: "90px",
    width: "90px",
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

const linkedinBgIn = keyframes({
  "0%": {
    background: "transparent",
  },
  "50%": {
    background: "#CF9FFF",
  },
  "100%": {
    background: "transparent",
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
    height: "90px",
    width: "90px",
    borderRadius: "45px",
    transform: "rotate(360deg)",
  },
});

const overlayIn = keyframes({
  "0%": {
    opacity: "0%",
    zIndex: 1,
  },
  "100%": {
    opacity: "75%",
    zIndex: 4,
  },
});

const overlayOut = keyframes({
  "0%": {
    opacity: "75%",
    zIndex: 4,
  },
  "100%": {
    opacity: "0%",
    zIndex: 1,
  },
});

const inLeftOverlay = keyframes({
  "0%": {
    color: "white",
    transform: "rotate(180deg) translate(-50%, calc(-50dvh + 50%))",
  },
  "50%": {
    color: "#CF9FFF",
    transform: "rotate(180deg) translate(-50%, calc(-50dvh + 50%))",
  },
  "100%": {
    color: "white",
    transform: "rotate(180deg) translate(-50%, calc(-50dvh + 50%))",
  },
});

const inRightOverlay = keyframes({
  "0%": {
    color: "white",
    transform: "translate(-50%, calc(50dvh - 50%))",
  },
  "50%": {
    color: "#CF9FFF",
    transform: "translate(-50%, calc(50dvh - 50%))",
  },
  "100%": {
    color: "white",
    transform: "translate(-50%, calc(50dvh - 50%))",
  },
});

export const useStyles = makeStyles()({
  container: {
    display: "flex",
    height: "100dvh",
    width: "100%",
    background:
      "linear-gradient(80deg, #e73c7e, #e73c7e, #FF6F91, #FF8C00, #FFB74D, #cad523, #3ed523, #23d5ab, #23d5ab, #3ed523, #cad523, #FFB74D, #FF8C00, #FF6F91, #e73c7e, #e73c7e)",
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
  leftTab: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 3,
    background: "white",
    boxShadow: "5px 10px 30px black",
    "&:hover": {
      cursor: "pointer",
    },
  },
  leftName: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    opacity: "0%",
    fontSize: "17px",
    fontFamily: "Barlow Semi Condensed",
    fontWeight: 800,
    "&:hover": {
      cursor: "pointer",
    },
  },
  leftIn: {
    animation: `${leftIn} 2s infinite ease-out`,
  },
  leftPage: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 5,
    height: "100dvh",
    width: "85dvw",
    transform: "translateX(-100%)",
    background: "white",
    boxShadow: "5px 0px 30px black",
  },
  leftPageIn: {
    animation: `${leftPageIn} 1s forwards`,
  },
  leftPageOut: {
    animation: `${leftPageOut} 1s forwards`,
  },
  leftArrow: {
    position: "absolute",
    top: 0,
    right: "7.5dvw",
    color: "white",
    fontSize: "120px",
    zIndex: 5,
    transform:
      "rotate(180deg) translate(calc(-7.5dvw - 100%), calc(-50dvh + 50%))",
  },
  leftArrowIn: {
    animation: `${leftArrowIn} 1s forwards`,
  },
  leftArrowOut: {
    animation: `${leftArrowOut} 1s forwards`,
  },
  rightTab: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 3,
    background: "white",
    boxShadow: "-5px 10px 30px black",
    "&:hover": {
      cursor: "pointer",
    },
  },
  rightName: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    opacity: "0%",
    fontSize: "17px",
    fontFamily: "Barlow Semi Condensed",
    fontWeight: 800,
    "&:hover": {
      cursor: "pointer",
    },
  },
  rightIn: {
    animation: `${rightIn} 2s infinite ease-out`,
  },
  rightPage: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 5,
    height: "100dvh",
    width: "85dvw",
    transform: "translateX(100%)",
    background: "white",
    boxShadow: "-5px 0px 30px black",
  },
  rightPageIn: {
    animation: `${rightPageIn} 1s forwards`,
  },
  rightPageOut: {
    animation: `${rightPageOut} 1s forwards`,
  },
  rightArrow: {
    position: "absolute",
    top: 0,
    left: "7.5dvw",
    color: "white",
    fontSize: "120px",
    zIndex: 5,
    transform: "translate(calc(-7.5dvw - 100%), calc(50dvh - 50%))",
  },
  rightArrowIn: {
    animation: `${rightArrowIn} 1s forwards`,
  },
  rightArrowOut: {
    animation: `${rightArrowOut} 1s forwards`,
  },
  github: {
    position: "absolute",
    bottom: 10,
    left: 10,
    zIndex: 2,
    height: "90px",
    width: "90px",
    boxShadow: "0px 10px 30px black",
    borderRadius: "45px",
    background: "transparent",
    "&:hover": {
      cursor: "pointer",
    },
  },
  githubIn: {
    animation: `${githubIn} 0.5s forwards, ${githubBgIn} 2s infinite ease-out`,
  },
  githubOut: {
    animation: `${githubOut} 0.5s forwards`,
  },
  linkedin: {
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 2,
    height: "90px",
    width: "90px",
    boxShadow: "0px 10px 30px black",
    borderRadius: "45px",
    background: "transparent",
    "&:hover": {
      cursor: "pointer",
    },
  },
  linkedinIn: {
    animation: `${linkedinIn} 0.5s forwards, ${linkedinBgIn} 2s infinite ease-out`,
  },
  linkedinOut: {
    animation: `${linkedinOut} 0.5s forwards`,
  },
  overlay: {
    width: "100%",
    height: "100dvh",
    background: "gray",
    opacity: "0%",
    zIndex: 1,
  },
  overlayHover: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  overlayIn: {
    animation: `${overlayIn} 0.5s forwards`,
  },
  overlayOut: {
    animation: `${overlayOut} 0.5s forwards`,
  },
  inLeftOverlay: {
    animation: `${inLeftOverlay} 2s infinite ease-out`,
  },
  inRightOverlay: {
    animation: `${inRightOverlay} 2s infinite ease-out`,
  },
});
