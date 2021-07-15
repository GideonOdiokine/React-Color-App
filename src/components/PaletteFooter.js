import React from "react";

const PaletteFooter = ({ paletteName, emoji }) => {
  return (
    <div>
      <footer className="Palette-footer">
        {paletteName}
        <span className="emoji">{emoji}</span>
      </footer>
    </div>
  );
};

export default PaletteFooter;
