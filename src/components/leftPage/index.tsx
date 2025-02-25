import { Box, Theme } from "@mui/material";
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

const useStyles = makeStyles()((theme) => ({
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
    [theme.breakpoints.down("md")]: {
      marginBottom: "15px",
    },
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
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-start",
      flexDirection: "column",
      overflow: "scroll",
    },
  },
  boxTitle: {
    fontFamily: "Barlow Semi Condensed",
    fontWeight: 600,
    fontSize: "2.5dvw",
    color: "white",
    marginBottom: "10px",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
  },
  infoImage: {
    width: "45%",
    borderRadius: "100%",
    border: "solid",
    borderWidth: "5px",
    background: "white",
    marginBottom: "30px",
    [theme.breakpoints.down("md")]: {
      width: "40%",
    },
  },
  infoText: {
    fontSize: "18px",
    margin: "0px 10px 0px 10px",
    overflow: "scroll",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },
}));

const infoBoxStyle = (theme: Theme) => ({
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
  [theme.breakpoints.down("md")]: {
    width: "60dvw",
    minHeight: "60dvh",
    marginBottom: "15px",
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
      <div className={classes.infoContainer}>
        <Box sx={infoBoxStyle}>
          <div className={classes.content}>
            <span className={classes.boxTitle}>Who am I?</span>
            <img src={Me} className={classes.infoImage} />
            <span className={classes.infoText}>
              My name is Ben Aronow. I grew up in Minneapolis, but currently
              live in Boston for school. I love software development, and am
              excited to officially begin my career as an engineer. Most of my
              current experience lies in web development, but I look forward to
              broadening my knowledge with every coming year.
            </span>
          </div>
        </Box>
        <Box sx={infoBoxStyle}>
          <div className={classes.content}>
            <span className={classes.boxTitle}>Education</span>
            <img src={NEU} className={classes.infoImage} />
            <span className={classes.infoText}>
              I am a senior at Northeastern University getting my BS in Computer
              Science, with a concentration in software. During my time here I
              have had the opportunity to participate in the cooperative
              education program, and I am on my second co-op now. I also work
              for University Recreation as a personal trainer.
            </span>
          </div>
        </Box>
        <Box sx={infoBoxStyle}>
          <div className={classes.content}>
            <span className={classes.boxTitle}>Current Role</span>
            <img src={eMoney} className={classes.infoImage} />
            <span className={classes.infoText}>
              I am currently working as a Software Engineer Co-op at eMoney
              Advisor, where I am helping to create an online portal for clients
              to utilize.
            </span>
          </div>
        </Box>
      </div>
    </div>
  );
};
