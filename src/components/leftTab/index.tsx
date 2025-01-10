import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
  leftTab: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 3,
    background: "white",
    boxShadow: "5px 10px 30px black",
    "&:hover": {
      cursor: "pointer",
    },
  },
});

interface LeftTabProps {
  handleLeftClick: () => void;
}

export const LeftTab = ({ handleLeftClick }: LeftTabProps) => {
  const { classes } = useStyles();

  return (
    <div
      id="leftTab"
      className={classes.leftTab}
      onClick={handleLeftClick}
    ></div>
  );
};
