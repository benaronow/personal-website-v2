import { Box, Theme } from "@mui/material";
import { keyframes } from "tss-react";
import { makeStyles } from "tss-react/mui";
import LiftLedger from "../../assets/liftledger.png";
import ByteBuddies from "../../assets/bytebuddies.png";
import Stocks from "../../assets/stocks.png";

const rightPageIn = keyframes({
  "0%": { transform: "translateX(110%)" },
  "100%": { transform: "translateX(0%)" },
});

const rightPageOut = keyframes({
  "0%": { transform: "translateX(0%)" },
  "100%": { transform: "translateX(110%)" },
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
  rightPage: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100dvh",
    width: "85dvw",
    transform: "translateX(110%)",
    background: "rgba(59, 59, 59, 0.8)",
    boxShadow: "-5px 0px 30px black",
  },
  rightPageIn: {
    animation: `${rightPageIn} 1s forwards`,
  },
  rightPageOut: {
    animation: `${rightPageOut} 1s forwards`,
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "15dvh",
    background: "linear-gradient(90deg, transparent, #CF9FFF, #CF9FFF)",
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
      flexDirection: "column",
      overflow: "scroll",
      justifyContent: "flex-start",
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
  notLink: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "88%",
  },
  link: {
    height: "12%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#0080FF",
    fontSize: "20px",
    fontWeight: 900,
    width: "calc(100% + 30px)",
    background: "#CF9FFF",
    borderRadius: "0px 0px 20px 20px",
    justifySelf: "flex-end",
    transform: "translateY(15px)",
  },
}));

interface RightPageProps {
  rightOpen: boolean | undefined;
}

const infoBoxStyle = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
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

export const RightPage = ({ rightOpen }: RightPageProps) => {
  const { classes } = useStyles();

  return (
    <div
      className={`${classes.rightPage} ${
        rightOpen
          ? classes.rightPageIn
          : rightOpen === false && classes.rightPageOut
      }`}
    >
      <div className={classes.header}>
        <span className={classes.title}>My Work</span>
      </div>
      <div className={classes.infoContainer}>
        <Box sx={infoBoxStyle}>
          <div className={classes.notLink}>
            <span className={classes.boxTitle}>LiftLedger</span>
            <img src={LiftLedger} className={classes.infoImage} />
            <span className={classes.infoText}>
              {`I used to track my workouts with Google Sheets. Needless to say,
            this didn't quite cut it for me. Inspired by my need for something more,
            I decided to make a workout tracker myself. Built with NextJS, LiftLedger
            is primarily designed as a PWA, but also works on desktop.`}
            </span>
          </div>
          <a
            href="https://github.com/benaronow/liftledger"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            <span>View Github Repo</span>
          </a>
        </Box>
        <Box sx={infoBoxStyle}>
          <div className={classes.notLink}>
            <span className={classes.boxTitle}>ByteBuddies</span>
            <img src={ByteBuddies} className={classes.infoImage} />
            <span className={classes.infoText}>
              ByteBuddies was the culmination of a group project for my Software
              Development class. We worked in an agile-style team to create a
              web application using a traditional MERN stack, along with
              Socket.IO. I focused on UI, state management with Redux, and live
              head-to-head games.
            </span>
          </div>
          <a
            href="https://github.com/benaronow/swe-final-project"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            <span>View Github Repo</span>
          </a>
        </Box>
        <Box sx={infoBoxStyle}>
          <div className={classes.notLink}>
            <span className={classes.boxTitle}>Twitter & Stocks</span>
            <img src={Stocks} className={classes.infoImage} />
            <span className={classes.infoText}>
              {`In a data science class that I took, my group and I used pandas,
            the Twitter and Polygon APIs, and with machine learning models such
            as Linear Regression and Random Forest to determine if CEO's Twitter
            activity impacted their businesses. The verdict? Maybe.`}
            </span>
          </div>
          <a
            href="https://github.com/benaronow/Stock-Market-and-Twitter-Correlation-Analysis"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            <span>View Github Repo</span>
          </a>
        </Box>
      </div>
    </div>
  );
};
