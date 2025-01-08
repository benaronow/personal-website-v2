import { Forward } from "@mui/icons-material";
import { keyframes } from "tss-react";
import { makeStyles } from "tss-react/mui";

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

const useStyles = makeStyles()({
  rightArrow: {
    position: "absolute",
    top: 0,
    left: "7.5dvw",
    color: "white",
    fontSize: "120px",
    zIndex: 5,
    transform: "translate(calc(-7.5dvw - 100%), calc(50dvh - 50%))",
    "&:hover": {
      cursor: "pointer",
    },
  },
  rightArrowIn: {
    animation: `${rightArrowIn} 1s forwards`,
  },
  rightArrowOut: {
    animation: `${rightArrowOut} 1s forwards`,
  },
  inRightOverlay: {
    animation: `${inRightOverlay} 2s infinite ease-out, ${rightArrowIn} 1s forwards`,
  },
});

interface RightArrowProps {
  rightOpen: boolean | undefined;
  inRightOverlay: boolean;
  handleOverlayClick: () => void;
}

export const RightArrow = ({ rightOpen, inRightOverlay, handleOverlayClick }: RightArrowProps) => {
  const { classes } = useStyles();

  return (
    <div onClick={handleOverlayClick}>
      <Forward
        className={`${classes.rightArrow} ${
          rightOpen
            ? classes.rightArrowIn
            : rightOpen === false && classes.rightArrowOut
        } ${rightOpen && inRightOverlay && classes.inRightOverlay}`}
      ></Forward>
    </div>
  );
};
