import { keyframes } from "tss-react";
import { makeStyles } from "tss-react/mui";

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

const useStyles = makeStyles()({
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
  leftIn: {
    animation: `${leftIn} 2s infinite ease-out`,
  },
});

interface LeftTabProps {
  leftIn: boolean;
  handleLeftClick: () => void;
}

export const LeftTab = ({ leftIn, handleLeftClick }: LeftTabProps) => {
  const { classes } = useStyles();

  return (
    <div
      id="leftTab"
      className={`${classes.leftTab} ${leftIn && classes.leftIn}`}
      onClick={handleLeftClick}
    ></div>
  );
};
