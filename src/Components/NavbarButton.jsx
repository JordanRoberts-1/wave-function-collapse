import React from "react";

const NavbarButton = ({ title, scrollId }) => {
  return (
    <a
      className="text-center text-4xl text-coloredtext w-fit p-1 px-3 rounded-full border-light ml-2 mb-1 hover:text-selection hover:font-medium cursor-pointer hover:animate-jiggle"
      href={scrollId}
    >
      {title}
    </a>
  );
};

export default NavbarButton;
