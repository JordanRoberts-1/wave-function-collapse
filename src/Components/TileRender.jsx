import { React, useState } from "react";
import COLOR_MAP, { TILE_SIZE } from "../Globals";

const TileRender = ({ tileData }) => {
  const [gridRows, setGridRows] = useState(`grid-rows-${TILE_SIZE}`);
  const [gridCols, setGridCols] = useState(`grid-cols-${TILE_SIZE}`);
  return (
    <div
      className={`grid ${gridRows} ${gridCols} place-items-center w-full h-full`}
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
  );
};

export default TileRender;
