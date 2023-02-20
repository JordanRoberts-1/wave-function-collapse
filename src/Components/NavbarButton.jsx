import React from "react";

const NavbarButton = ({ title }) => {
  return (
    <div className="text-center text-3xl text-coloredtext w-fit p-1 px-3 rounded-full border-light ml-2 mb-1 hover:text-selection hover:font-medium">
      {title}
    </div>
  );
};

export default NavbarButton;
