import { keyframes } from "tss-react";
import { makeStyles } from "tss-react/mui";

const leftPageIn = keyframes({
  "0%": {
    transform: "translateX(-110%)",
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
    transform: "translateX(-110%)",
  },
});

const useStyles = makeStyles()({
  leftPage: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100dvh",
    width: "85dvw",
    transform: "translateX(-110%)",
    background: "white",
    boxShadow: "5px 0px 30px black",
  },
  leftPageIn: {
    animation: `${leftPageIn} 1s forwards`,
  },
  leftPageOut: {
    animation: `${leftPageOut} 1s forwards`,
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "15dvh",
    background: "linear-gradient(90deg, white, #CF9FFF, white)",
  },
  title: {
    fontSize: "65px",
    fontFamily: "Barlow Semi Condensed",
    fontWeight: 800,
  },
});

interface LeftPageProps {
  leftOpen: boolean | undefined;
}

export const LeftPage = ({ leftOpen }: LeftPageProps) => {
  const { classes } = useStyles();
  return (
    <div
      className={`${classes.leftPage} ${
        leftOpen
          ? classes.leftPageIn
          : leftOpen === false && classes.leftPageOut
      }`}
    >
      <div className={classes.header}>
        <span className={classes.title}>About Me</span>
      </div>
    </div>
  );
};
