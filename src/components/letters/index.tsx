import { makeStyles } from "tss-react/mui";
import { chars } from "../../utils/letterUtils";
import { useTheme } from "@mui/material";

const useStyles = makeStyles()({
  movingTitle: {
    position: "absolute",
    fontFamily: "Barlow Semi Condensed",
    fontSize: "100px",
    fontWeight: 900,
    textShadow: "0px 10px 7px black",
    transform: "translate(-50%, -50%)",
    color: "white",
  },
  stationaryTitle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "12dvw",
    fontFamily: "Barlow Semi Condensed",
    fontWeight: 900,
    textShadow: "0px 10px 7px black",
    width: "100%",
    textAlign: "center",
  },
});

interface LettersProps {
  width: number;
}

export const Letters = ({ width }: LettersProps) => {
  const { classes } = useStyles();
  const theme = useTheme();

  return (
    <>
      {width > theme.breakpoints.values["md"] ? (
        <>
          {chars.map((char, idx) => (
            <div key={idx} id={char.char}>
              <span className={classes.movingTitle}>{char.char}</span>
            </div>
          ))}
        </>
      ) : (
        <span className={classes.stationaryTitle}>{`Hi, I'm Ben!`}</span>
      )}
    </>
  );
};
