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

// #FFABAB,

const useStyles = makeStyles()({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100dvh",
    width: "100%",
    background:
      "linear-gradient(80deg, #e73c7e, #e73c7e, #FF6F91, #FF8C00, #FFB74D, #cad523, #3ed523, #23d5ab, #3ed523, #cad523, #FFB74D, #FF8C00, #FF6F91, #e73c7e, #e73c7e)",
    backgroundSize: "2200% 2200%",
    animation: `${gradient} 20s linear infinite`,
  },
  title: {
    fontSize: "40px",
    fontWeight: 700,
  },
});

export const Header = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <span className={classes.title}>Hi, I'm Ben</span>
    </div>
  );
};
