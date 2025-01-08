import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
  leftName: {
    position: "absolute",
    top: 0,
    left: 0,
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
});

interface LeftNameProps {
  handleLeftClick: () => void;
}

export const LeftName = ({ handleLeftClick }: LeftNameProps) => {
  const { classes } = useStyles();

  return (
    <div id="leftName" className={classes.leftName} onClick={handleLeftClick}>
      <span>About</span>
      <span>Me</span>
    </div>
  );
};
