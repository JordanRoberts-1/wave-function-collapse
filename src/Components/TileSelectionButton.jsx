import { React, useState } from "react";
import COLOR_MAP, { TILE_SIZE } from "../Globals";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";

const TileSelectionButton = ({ index, tileSelection, tileData, onSelect }) => {
  const [gridRows, setGridRows] = useState(`grid-rows-${TILE_SIZE}`);
  const [gridCols, setGridCols] = useState(`grid-cols-${TILE_SIZE}`);
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
        <h1 className="w-12">Tile {`#${index}`}</h1>
        <div className={`w-10 h-10 ${rotateMap[rotateAmount]}`}>
          <div
            className={`grid ${gridRows} ${gridCols} place-items-center w-10 h-10`}
          >
            {tileData?.getColors()?.map((color, i) => {
              return (
                <div
                  key={i}
                  style={{ background: `${COLOR_MAP[color]}` }}
                  className="w-full h-full"
                ></div>
              );
            })}
          </div>
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
