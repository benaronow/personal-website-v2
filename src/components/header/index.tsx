import { MouseEvent } from "react";
import { keyframes } from "tss-react";
import { makeStyles } from "tss-react/mui";

const gradient = keyframes({
  "0%": {
    backgroundPosition: "0% 80%",
  },
  "100%": {
    backgroundPosition: "100% 20%",
  },
});

const useStyles = makeStyles()({
  container: {
    display: "flex",
    height: "100dvh",
    width: "100%",
    background:
      "linear-gradient(80deg, #e73c7e, #e73c7e, #FF6F91, #FF8C00, #FFB74D, #cad523, #3ed523, #23d5ab, #3ed523, #cad523, #FFB74D, #FF8C00, #FF6F91, #e73c7e, #e73c7e)",
    backgroundSize: "2200% 2200%",
    animation: `${gradient} 20s linear infinite`,
  },
  title: {
    fontSize: "60px",
    fontWeight: 700,
    transform: "translateY(-25%)",
  },
});

export const Header = () => {
  const { classes } = useStyles();

  const moveAll = (e: MouseEvent) => {
    move(e, "-40");
    move(e, "0");
    move(e, "40");
  };

  let pushX = 0;
  let pushY = 0;

  const move = (event: MouseEvent, id: string) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const anchorX = window.innerWidth / 2 + parseInt(id);
    const anchorY = window.innerHeight / 2;
    const letter = document.getElementById(id);
    if (letter) {
      letter.style.position = "absolute";
      const rect = letter.getBoundingClientRect();
      const distanceX = mouseX - rect.x;
      const distanceY = mouseY - rect.y;
      const distance = Math.sqrt(
        Math.pow(distanceX, 2) + Math.pow(distanceY, 2)
      );
      const powerX = rect.x - ((distanceX / distance) * 500) / distance;
      const powerY = rect.y - ((distanceY / distance) * 500) / distance;
      pushX = (pushX + (anchorX - rect.x) / 2) / 2.1;
      pushY = (pushY + (anchorY - rect.y) / 2) / 2.1;
      letter.style.left = powerX + pushX + "px";
      letter.style.top = powerY + pushY + "px";
    }
  };

  return (
    <div className={classes.container} onMouseMove={moveAll}>
      <span id="-40" className={classes.title}>
        B
      </span>
      <span id="0" className={classes.title}>
        E
      </span>
      <span id="40" className={classes.title}>
        N
      </span>
    </div>
  );
};
