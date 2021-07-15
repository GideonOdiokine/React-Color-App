import React from "react";
import Select from "@material-ui/core/Select";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import { MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
// import Snackbar from "@material-ui/core/Snackbar";

const Navbar = ({
  level,
  changeLevel,
  handleChangeFormat,
  colorFormat,
  open,
  closeMessage,
  showingAllColor,
}) => {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">reactcolorpicker</Link>
      </div>
      {showingAllColor && (
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
      )}
      <div className="select-container">
        <Select value={colorFormat} onChange={handleChangeFormat}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(342,132,111,1.0)</MenuItem>
        </Select>
        {open && (
          <span style={messageStyle}>
            Format Changed To {colorFormat.toUpperCase()}
            <span style={closeMessageBtn} onClick={closeMessage}>
              x
            </span>
          </span>
        )}
      </div>
    </header>
  );
};
const messageStyle = {
  backgroundColor: "black",
  color: "#fff",
  padding: "20px",
  position: "absolute",
  bottom: "0",
  left: "0",
  zIndex: "999",
  fontSize: "22px",
  fontFamily: "sans-serif",
  borderRadius: "4px",
  display: "inline-block",
  width: "350px",
};
const closeMessageBtn = {
  fontFamily: "sans-serif",
  position: "absolute",
  right: "20px",
  top: "20px",
  cursor: "pointer",
  fontSize: "26px",
  height: "100%",
};
export default Navbar;
