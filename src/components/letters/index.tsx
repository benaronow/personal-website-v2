import { makeStyles } from "tss-react/mui";
import { chars } from "../../utils/letterUtils";

const useStyles = makeStyles()({
  title: {
    position: "absolute",
    fontFamily: "Barlow Semi Condensed",
    fontSize: "100px",
    fontWeight: 900,
    textShadow: "0px 10px 7px black",
    transform: "translate(-50%, -50%)",
    color: "white",
  },
});

export const Letters = () => {
  const { classes } = useStyles();

  return (
    <>
      {chars.map((char, idx) => (
        <div key={idx} id={char.char}>
          <span className={classes.title}>{char.char}</span>
        </div>
      ))}
    </>
  );
};
