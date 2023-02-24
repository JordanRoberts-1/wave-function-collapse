import React from "react";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  return (
    <div className="flex flex-row gap-5 w-screen bg-darkest/60 py-4 fixed z-10 backdrop-blur-lg">
      <NavbarButton title="Tile editor" />
      <h1 className="justify-center items-center text-center text-5xl text-coloredtext">
        ⸱
      </h1>
      <NavbarButton title="Constraints" />
      <h1 className="justify-center items-center text-center text-5xl text-coloredtext">
        ⸱
      </h1>
      <NavbarButton title="Visualize" />
    </div>
  );
};

export default Navbar;
