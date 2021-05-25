import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";

class Palette extends Component {
  state = { level: 500 };

  changeLevel = (newLevel) => {
    this.setState({ level: newLevel });
  };
  render() {
    const colorBoxes = this.props.palette.colors[this.state.level].map(
      (color) => <ColorBox background={color.hex} name={color.name} />
    );

    return (
      <div className="Palette">
        <Navbar level={this.state.level} changeLevel={this.changeLevel} />
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default Palette;
