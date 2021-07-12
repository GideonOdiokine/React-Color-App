import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    border: "1px solid black",
    "&:hover": {
      cursor: "pointer",
    },
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
    borderRadius: "7px",
    overflow: "hidden",
  },
  title: {
    display: "flex",
    fontFamily: "sans-serif",
    justifyContent: "space-between",
    alignItem: "center",
    color: "black",
    paddingTop: "0.3rem",
    fontSize: "1rem",
    position: "relative",
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
  miniColor: {
    height: "24%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
  },
};
const MiniPalette = (props) => {
  const { classes, paletteName, emoji, colors } = props;
  const miniColorBoxes = colors.map((color) => {
    return (
      <div
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
        key={color.name}
      ></div>
    );
  });
  return (
    <div className={classes.root}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span>{emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
