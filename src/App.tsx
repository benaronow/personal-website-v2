import { makeStyles } from "tss-react/mui";
import { Header } from "./components/header";

const useStyles = makeStyles()({
  container: {
    textAlign: "center",
  },
  header: {
    backgroundColor: "#282c34",
    height: "100dvh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
});

export const App = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <Header />
      </header>
    </div>
  );
};
