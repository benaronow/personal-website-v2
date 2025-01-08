import { keyframes } from "tss-react";
import { makeStyles } from "tss-react/mui";

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

const useStyles = makeStyles()({
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
});

interface OverlayProps {
  leftOpen: boolean | undefined;
  rightOpen: boolean | undefined;
  handleOverlayClick: () => void;
}

export const Overlay = ({
  leftOpen,
  rightOpen,
  handleOverlayClick,
}: OverlayProps) => {
  const { classes } = useStyles();

  return (
    <div
      className={`${classes.overlay} ${
        leftOpen || rightOpen
          ? `${classes.overlayIn} ${classes.overlayHover}`
          : classes.overlayOut
      }`}
      onClick={handleOverlayClick}
    ></div>
  );
};
