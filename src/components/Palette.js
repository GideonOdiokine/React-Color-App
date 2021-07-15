import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";
import PaletteFooter from "./PaletteFooter";

class Palette extends Component {
  state = { level: 500, colorFormat: "hex", open: false };

  changeLevel = (newLevel) => {
    this.setState({ level: newLevel });
  };

  handleColorChange = (e) => {
    this.setState({ colorFormat: e.target.value, open: true });
    setTimeout(() => {
      this.setState({ open: false });
    }, 4000);
  };
  closeMessage = () => {
    this.setState({ open: false });
  };
  render() {
    const { paletteName, id, colors, emoji } = this.props.palette;
    const colorBoxes = colors[this.state.level].map((color) => (
      <ColorBox
        background={color[this.state.colorFormat]}
        name={color.name}
        key={color.id}
        moreUrl={`/palette/${id}/${color.id}`}
        showLink={true}
      />
    ));
    // rgb(246,113,114)
    /* #f67172 */
    return (
      <div className="Palette">
        <Navbar
          level={this.state.level}
          changeLevel={this.changeLevel}
          handleChangeFormat={this.handleColorChange}
          colorFormat={this.state.colorFormat}
          open={this.state.open}
          closeMessage={this.closeMessage}
          showingAllColor={true}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <PaletteFooter emoji={emoji} paletteName={paletteName} />
      </div>
    );
  }
}

export default Palette;
