import { keyframes } from "tss-react";
import { makeStyles } from "tss-react/mui";

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

const useStyles = makeStyles()({
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
  rightIn: {
    animation: `${rightIn} 2s infinite ease-out`,
  },
});

interface RightTabProps {
  rightIn: boolean;
  handleRightClick: () => void;
}

export const RightTab = ({ rightIn, handleRightClick }: RightTabProps) => {
  const { classes } = useStyles();

  return (
    <div
      id="rightTab"
      className={`${classes.rightTab} ${rightIn && classes.rightIn}`}
      onClick={handleRightClick}
    ></div>
  );
};
