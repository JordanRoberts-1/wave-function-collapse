import { React, useState } from "react";
import COLOR_MAP, { TILE_SIZE } from "../Globals";

const Tile = ({ tiles, gridData }) => {
  const [gridRows, setGridRows] = useState(`grid-rows-${TILE_SIZE}`);
  const [gridCols, setGridCols] = useState(`grid-cols-${TILE_SIZE}`);

  return (
    <div
      className={`grid ${gridRows} ${gridCols} place-items-center w-full h-full border relative`}
    >
      <div className="absolute z-100 text-black text-xs text-center">
        {`c: ${gridData.getChoice()}, e: ${gridData.getEntropy()}`}
      </div>
      {tiles[gridData.getChoice()]?.getColors()?.map((color, index) => {
        return (
          <div
            key={index}
            style={{ background: `${COLOR_MAP[color]}` }}
            className="w-full h-full"
          ></div>
        );
      })}
    </div>
  );
};

export default Tile;
