import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
  rightTab: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 3,
    background: "white",
    boxShadow: "-5px 10px 30px black",
    "&:hover": {
      cursor: "pointer",
    },
  },
});

interface RightTabProps {
  handleRightClick: () => void;
}

export const RightTab = ({ handleRightClick }: RightTabProps) => {
  const { classes } = useStyles();

  return (
    <div
      id="rightTab"
      className={classes.rightTab}
      onClick={handleRightClick}
    ></div>
  );
};
