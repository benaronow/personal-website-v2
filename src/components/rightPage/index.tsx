import { Box } from "@mui/material";
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

const useStyles = makeStyles()({
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

interface RightPageProps {
  rightOpen: boolean | undefined;
}

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
          <span className={classes.boxTitle}>LiftLedger</span>
          <img src={LiftLedger} className={classes.infoImage} />
          <span>A paragraph about LiftLedger will go in this container</span>
        </Box>
        <Box sx={infoBoxStyle}>
          <span className={classes.boxTitle}>ByteBuddies</span>
          <img src={ByteBuddies} className={classes.infoImage} />
          <span>A paragraph about ByteBuddies will go in this container</span>
        </Box>
        <Box sx={infoBoxStyle}>
          <span className={classes.boxTitle}>Twitter & Stocks</span>
          <img src={Stocks} className={classes.infoImage} />
          <span>A paragraph about stocks will go in this container</span>
        </Box>
      </div>
    </div>
  );
};
