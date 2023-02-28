import { React, useState, useEffect } from "react";
import COLOR_MAP, { TILE_SIZE, TileData } from "../Globals";

const Tile = ({ tileData }) => {
  const [gridRows, setGridRows] = useState(`grid-rows-${TILE_SIZE}`);
  const [gridCols, setGridCols] = useState(`grid-cols-${TILE_SIZE}`);
  const [tileIndex, setTileIndex] = useState(tileData.getTileIndex());

  return (
    <div
      className={`grid ${gridRows} ${gridCols} place-items-center w-full h-full border`}
    >
      {tileData?.getColors()?.map((color, index) => {
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
