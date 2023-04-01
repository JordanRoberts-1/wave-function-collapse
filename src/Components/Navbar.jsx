import React from "react";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  return (
    <div className="flex flex-row gap-5 w-full bg-darkest/60 py-4 fixed z-10 backdrop-blur-lg">
      <NavbarButton title="Home" scrollId="#Home" />
      <h1 className="justify-center items-center text-center text-5xl text-coloredtext">
        ⸱
      </h1>
      <NavbarButton title="Tile Editor" scrollId="#TileEditor" />
      <h1 className="justify-center items-center text-center text-5xl text-coloredtext">
        ⸱
      </h1>
      <NavbarButton title="Visualize" scrollId="#Visualize" />
    </div>
  );
};

export default Navbar;
