import React from "react";

const NavbarButton = ({ title }) => {
  return (
    <div className="text-center text-3xl text-light w-fit p-1 px-3 rounded-full bg-dark border-light ml-2 mb-1 hover:text-white">
      {title}
    </div>
  );
};

export default NavbarButton;
