import React, { Component } from "react";
// import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1 style={{ fontFamily: "sans-serif" }}>React Colors</h1>
        {palettes.map((palette) => (
          <MiniPalette {...palette} key={palette.id} />
        ))}
      </div>
    );
  }
}

export default PaletteList;
