import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { level: 500, colorFormat: "hex", open: false };
    console.log(this._shades);
  }
  gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  };

  changeLevel = (newLevel) => {
    this.setState({ level: newLevel });
  };

  handleColorChange = (e) => {
    this.setState({ colorFormat: e.target.value, open: true });
    setTimeout(() => {
      this.setState({ open: false });
    }, 4000);
  };

  render() {
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color[this.state.colorFormat]}
        name={color.name}
        background={color[this.state.colorFormat]}
        showLink={false}
      />
    ));
    return (
      <div className="Palette">
        <Navbar
          handleChangeFormat={this.handleColorChange}
          colorFormat={this.state.colorFormat}
          open={this.state.open}
          closeMessage={this.closeMessage}
        />
        {/* <h3>SingleColorPalette</h3> */}
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
