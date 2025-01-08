import { Forward } from "@mui/icons-material";
import { keyframes } from "tss-react";
import { makeStyles } from "tss-react/mui";

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

const useStyles = makeStyles()({
  leftArrow: {
    position: "absolute",
    top: 0,
    right: "7.5dvw",
    color: "white",
    fontSize: "120px",
    zIndex: 5,
    transform:
      "rotate(180deg) translate(calc(-7.5dvw - 100%), calc(-50dvh + 50%))",
    "&:hover": {
      cursor: "pointer",
    },
  },
  leftArrowIn: {
    animation: `${leftArrowIn} 1s forwards`,
  },
  leftArrowOut: {
    animation: `${leftArrowOut} 1s forwards`,
  },
  inLeftOverlay: {
    animation: `${inLeftOverlay} 2s infinite ease-out, ${leftArrowIn} 1s forwards`,
  },
});

interface LeftArrowProps {
  leftOpen: boolean | undefined;
  inLeftOverlay: boolean;
  handleOverlayClick: () => void;
}

export const LeftArrow = ({
  leftOpen,
  inLeftOverlay,
  handleOverlayClick,
}: LeftArrowProps) => {
  const { classes } = useStyles();

  return (
    <div onClick={handleOverlayClick}>
      <Forward
        className={`${classes.leftArrow} ${
          leftOpen
            ? classes.leftArrowIn
            : leftOpen === false && classes.leftArrowOut
        } ${leftOpen && inLeftOverlay && classes.inLeftOverlay}`}
      ></Forward>
    </div>
  );
};
