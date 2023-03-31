import { React, useState } from "react";
import COLOR_MAP, { TILE_SIZE } from "../Globals";

const Tile = ({ tiles, gridData, handleManualSelection }) => {
  const [gridRows, setGridRows] = useState(`grid-rows-${TILE_SIZE}`);
  const [gridCols, setGridCols] = useState(`grid-cols-${TILE_SIZE}`);

  const rotateMap = ["rotate-0", "rotate-90", "rotate-180", "-rotate-90"];

  return (
    <>
      {gridData.isCollapsed() ? (
        <div
          className={`grid ${gridRows} ${gridCols} place-items-center w-full h-full ${
            rotateMap[gridData.getChoice()[1]]
          }`}
        >
          {tiles[gridData.getChoice()[0]]?.getColors()?.map((color, index) => {
            return (
              <div
                key={index}
                style={{ background: `${COLOR_MAP[color]}` }}
                className="w-full h-full"
              ></div>
            );
          })}
        </div>
      ) : (
        <div
          className="w-full h-full text-2xl text-black border relative"
          style={{
            background: `rgba(${
              255 - (gridData.getEntropy() / tiles.length) * 255
            }, 255, 255, 255)`,
          }}
          onClick={() => handleManualSelection(gridData.getIndex())}
        >
          <div className="absolute z-100 right-1 bottom-0 text-darkest text-lg text-center font-sans">
            {`${gridData.getEntropy()}`}
          </div>
        </div>
      )}
    </>
  );
};

export default Tile;
