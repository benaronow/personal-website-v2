import { keyframes } from "tss-react";
import { makeStyles } from "tss-react/mui";

const rightNameIn = keyframes({
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
  rightNameIn: {
    animation: `${rightNameIn} 2s infinite ease-out`,
  },
});

interface RightNameProps {
  rightIn: boolean;
  handleRightClick: () => void;
}

export const RightName = ({ rightIn, handleRightClick }: RightNameProps) => {
  const { classes } = useStyles();

  return (
    <div
      id="rightName"
      className={`${classes.rightName} ${rightIn && classes.rightNameIn}`}
      onClick={handleRightClick}
    >
      <span>My</span>
      <span>Work</span>
    </div>
  );
};
