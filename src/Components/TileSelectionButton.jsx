import { React, useState, useEffect } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import TileRender from "./TileRender";

const TileSelectionButton = ({ index, tileSelection, tileData, onSelect }) => {
  const [rotateAmount, setRotateAmount] = useState(0);

  useEffect(() => {
    onSelect(index, rotateAmount);
  }, [rotateAmount]);

  const rotateMap = ["rotate-0", "rotate-90", "rotate-180", "-rotate-90"];

  return (
    <div
      className={`w-full h-16 bg-darkest p-4 border-t flex flex-row items-center gap-4 border-coloredtext/25 hover:bg-light font-sans cursor-pointer ${
        tileSelection == index ? "bg-light" : ""
      }`}
      onClick={() => onSelect(index, rotateAmount)}
    >
      <button
        key={index}
        className={`flex flex-row gap-8 items-center font-sans ${
          tileSelection == index ? "bg-light" : ""
        }`}
      >
        <h1 className="w-16">Tile {`#${index}`}</h1>
        <div className={`w-10 h-10 ${rotateMap[rotateAmount]}`}>
          <TileRender tileData={tileData} />
        </div>
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setRotateAmount((rotateAmount + 1) % 4);
        }}
      >
        <ArrowPathIcon className="z-40 stroke-coloredtext w-6 top-4 right-4 cursor-pointer transform transition duration-300 hover:rotate-180" />
      </button>
    </div>
  );
};

export default TileSelectionButton;
