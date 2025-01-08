import { makeStyles } from "tss-react/mui";

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
});

interface RightNameProps {
  handleRightClick: () => void;
}

export const RightName = ({ handleRightClick }: RightNameProps) => {
  const { classes } = useStyles();

  return (
    <div
      id="rightName"
      className={classes.rightName}
      onClick={handleRightClick}
    >
      <span>My</span>
      <span>Work</span>
    </div>
  );
};
