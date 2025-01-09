import { keyframes } from "tss-react";
import { makeStyles } from "tss-react/mui";

const leftNameIn = keyframes({
  "0%": {
    color: "black",
  },
  "50%": {
    color: "#CF9FFF",
  },
  "100%": {
    color: "black",
  },
});

const useStyles = makeStyles()({
  leftName: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    opacity: "0%",
    fontSize: "17px",
    fontFamily: "Barlow Semi Condensed",
    fontWeight: 800,
    color: "black",
    "&:hover": {
      cursor: "pointer",
    },
  },
  leftNameIn: {
    animation: `${leftNameIn} 2s infinite ease-out`,
  },
});

interface LeftNameProps {
  leftIn: boolean;
  handleLeftClick: () => void;
}

export const LeftName = ({ leftIn, handleLeftClick }: LeftNameProps) => {
  const { classes } = useStyles();

  return (
    <div
      id="leftName"
      className={`${classes.leftName} ${leftIn && classes.leftNameIn}`}
      onClick={handleLeftClick}
    >
      <span>About</span>
      <span>Me</span>
    </div>
  );
};
