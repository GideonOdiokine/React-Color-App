import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./App.css";

class ColorBox extends Component {
  state = { copied: false };
  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  };
  render() {
    const { name, background, moreUrl, showLink } = this.props;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className="ColorBox">
          <div
            style={{ background }}
            className={`copy-overlay ${this.state.copied && "show"}`}
          />
          <div className={`copy-msg ${this.state.copied && "show"}`}>
            <h4>Copied!</h4>
            <p>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className="color-title">{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          {showLink && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <span className="see-more">More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
