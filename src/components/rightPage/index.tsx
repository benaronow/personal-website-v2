import { keyframes } from "tss-react";
import { makeStyles } from "tss-react/mui";

const rightPageIn = keyframes({
  "0%": {
    transform: "translateX(110%)",
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
    transform: "translateX(110%)",
  },
});

const useStyles = makeStyles()({
  rightPage: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 5,
    height: "100dvh",
    width: "85dvw",
    transform: "translateX(110%)",
    background: "white",
    boxShadow: "-5px 0px 30px black",
  },
  rightPageIn: {
    animation: `${rightPageIn} 1s forwards`,
  },
  rightPageOut: {
    animation: `${rightPageOut} 1s forwards`,
  },
});

interface RightPageProps {
  rightOpen: boolean | undefined;
}

export const RightPage = ({ rightOpen }: RightPageProps) => {
  const { classes } = useStyles();
  return (
    <div
      className={`${classes.rightPage} ${
        rightOpen
          ? classes.rightPageIn
          : rightOpen === false && classes.rightPageOut
      }`}
    ></div>
  );
};
