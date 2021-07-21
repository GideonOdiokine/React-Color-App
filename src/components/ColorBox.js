import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./App.css";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/styles";

const styles = {
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? "black" : "white",
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.08 ? "white" : "black",
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7
        ? "rgba(0,0,255,0.3)"
        : "white",
    position: "absolute",
    background: "rgba(255,255,255,0.3)",
    right: "10px",
    bottom: "0px",
    width: "70px",
    height: "30px",
    textTransform: " uppercase",
    lineHeight: "30px",
    textAlign: "center",
    border: "none",
  },
};

class ColorBox extends Component {
  state = { copied: false };
  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  };
  render() {
    const { name, background, moreUrl, showLink, classes } = this.props;
    const isDarkColor = chroma(background).luminance() <= 0.8;
    const isLightColor = chroma(background).luminance() >= 0.6;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className="ColorBox">
          <div
            style={{ background }}
            className={`copy-overlay ${this.state.copied && "show"}`}
          />
          <div className={`copy-msg ${this.state.copied && "show"}`}>
            <h4>Copied!</h4>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={`copy-button ${isLightColor && "dark-text"} `}>
              Copy
            </button>
          </div>
          {showLink && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <span
                className={`${classes.seeMore} ${isDarkColor && "white-text"}`}
              >
                More
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
