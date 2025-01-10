import { makeStyles } from "tss-react/mui";
import GithubImg from "../../assets/github.png";
import { keyframes } from "tss-react";

const githubIn = keyframes({
  "0%": {
    height: "80px",
    width: "80px",
    transform: "rotate(-360deg)",
  },
  "100%": {
    bottom: 20,
    right: 20,
    height: "160px",
    width: "160px",
    borderRadius: "80px",
    transform: "rotate(0deg)",
  },
});

const githubBgIn = keyframes({
  "0%": {
    background: "transparent",
  },
  "50%": {
    background: "#CF9FFF",
  },
  "100%": {
    background: "transparent",
  },
});

const githubOut = keyframes({
  "0%": {
    height: "160px",
    width: "160px",
    borderRadius: "80px",
    transform: "rotate(360deg)",
  },
  "100%": {
    bottom: 10,
    right: 10,
    height: "80px",
    width: "80px",
    borderRadius: "40px",
    transform: "rotate(0deg)",
  },
});

const useStyles = makeStyles()({
  github: {
    position: "absolute",
    bottom: 10,
    left: 10,
    zIndex: 2,
    height: "80px",
    width: "80px",
    boxShadow: "0px 10px 30px black",
    borderRadius: "40px",
    background: "transparent",
    "&:hover": {
      cursor: "pointer",
    },
  },
  githubIn: {
    animation: `${githubIn} 0.5s forwards, ${githubBgIn} 2s infinite ease-out`,
  },
  githubOut: {
    animation: `${githubOut} 0.5s forwards`,
  },
});

interface GithubProps {
  githubIn: boolean | undefined;
}

export const Github = ({ githubIn }: GithubProps) => {
  const { classes } = useStyles();

  return (
    <a href="https://github.com/benaronow" target="_blank" rel="noreferrer">
      <img
        id="github"
        className={`${classes.github} ${
          githubIn ? classes.githubIn : githubIn === false && classes.githubOut
        }`}
        src={GithubImg}
      />
    </a>
  );
};
