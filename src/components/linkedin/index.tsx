import { makeStyles } from "tss-react/mui";
import LinkedinImg from "../../assets/linkedin.png";
import { keyframes } from "tss-react";

const linkedinIn = keyframes({
  "0%": {
    height: "90px",
    width: "90px",
    transform: "rotate(0deg)",
  },
  "100%": {
    bottom: 20,
    right: 20,
    height: "160px",
    width: "160px",
    borderRadius: "80px",
    transform: "rotate(-360deg)",
  },
});

const linkedinBgIn = keyframes({
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

const linkedinOut = keyframes({
  "0%": {
    height: "160px",
    width: "160px",
    borderRadius: "80px",
    transform: "rotate(0deg)",
  },
  "100%": {
    bottom: 10,
    right: 10,
    height: "90px",
    width: "90px",
    borderRadius: "45px",
    transform: "rotate(360deg)",
  },
});

const useStyles = makeStyles()({
  linkedin: {
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 2,
    height: "90px",
    width: "90px",
    boxShadow: "0px 10px 30px black",
    borderRadius: "45px",
    background: "transparent",
    "&:hover": {
      cursor: "pointer",
    },
  },
  linkedinIn: {
    animation: `${linkedinIn} 0.5s forwards, ${linkedinBgIn} 2s infinite ease-out`,
  },
  linkedinOut: {
    animation: `${linkedinOut} 0.5s forwards`,
  },
});

interface LinkedinProps {
  linkedinIn: boolean | undefined;
}

export const Linkedin = ({ linkedinIn }: LinkedinProps) => {
  const { classes } = useStyles();

  return (
    <a
      href="https://www.linkedin.com/in/benaronow/"
      target="_blank"
      rel="noreferrer"
    >
      <img
        id="linkedin"
        className={`${classes.linkedin} ${
          linkedinIn
            ? classes.linkedinIn
            : linkedinIn === false && classes.linkedinOut
        }`}
        src={LinkedinImg}
      />
    </a>
  );
};
