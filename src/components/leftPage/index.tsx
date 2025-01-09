import { Box } from "@mui/material";
import { keyframes } from "tss-react";
import { makeStyles } from "tss-react/mui";
import Me from "../../assets/me.png";
import NEU from "../../assets/neu.png";
import eMoney from "../../assets/emoney.png";

const leftPageIn = keyframes({
  "0%": { transform: "translateX(-110%)" },
  "100%": { transform: "translateX(0%)" },
});

const leftPageOut = keyframes({
  "0%": { transform: "translateX(0%)" },
  "100%": { transform: "translateX(-110%)" },
});

const hoverIn = keyframes({
  "0%": { borderWidth: "5px" },
  "100%": { borderWidth: "15px" },
});

const hoverOut = keyframes({
  "0%": { borderWidth: "15px" },
  "100%": { borderWidth: "5px" },
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
    background: "rgba(59, 59, 59, 0.8)",
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
    background: "linear-gradient(90deg, #CF9FFF, #CF9FFF, transparent)",
  },
  title: {
    fontSize: "65px",
    fontFamily: "Barlow Semi Condensed",
    fontWeight: 800,
    color: "white",
  },
  infoContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80dvw",
    height: "85dvh",
  },
  boxTitle: {
    fontFamily: "Barlow Semi Condensed",
    fontWeight: 600,
    fontSize: "35px",
    color: "white",
    marginBottom: "10px",
  },
  infoImage: {
    width: "50%",
    aspectRatio: 1,
    borderRadius: "100%",
    border: "solid",
    borderWidth: "5px",
    background: "white",
    marginBottom: "15px",
  },
});

const infoBoxStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "left",
  height: "70dvh",
  width: "20dvw",
  background: "linear-gradient(#CF9FFF, #CF9FFF, white, white, white)",
  borderRadius: "20px",
  boxShadow: "0px 10px 30px black",
  border: "solid",
  borderColor: "#CF9FFF",
  borderWidth: "5px",
  padding: "10px",
  animation: `${hoverOut} 0.2s forwards`,
  "&:hover": {
    animation: `${hoverIn} 0.2s forwards`,
  },
};

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
      <div className={classes.infoContainer}>
        <Box sx={infoBoxStyle}>
          <span className={classes.boxTitle}>Who am I?</span>
          <img src={Me} className={classes.infoImage} />
          <span>A paragraph about me will go in this container</span>
        </Box>
        <Box sx={infoBoxStyle}>
          <span className={classes.boxTitle}>Education</span>
          <img src={NEU} className={classes.infoImage} />
          <span>A paragraph about Northeastern will go in this container</span>
        </Box>
        <Box sx={infoBoxStyle}>
          <span className={classes.boxTitle}>Current Role</span>
          <img src={eMoney} className={classes.infoImage} />
          <span>A paragraph about eMoney will go in this container</span>
        </Box>
      </div>
    </div>
  );
};
