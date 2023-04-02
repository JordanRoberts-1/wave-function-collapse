import { React, useState } from "react";
import TileRender from "./TileRender";

const Tile = ({ tiles, gridData, handleManualSelection }) => {
  const rotateMap = ["rotate-0", "rotate-90", "rotate-180", "-rotate-90"];

  return (
    <>
      {gridData.isCollapsed() ? (
        <div className={`w-full h-full ${rotateMap[gridData.getChoice()[1]]}`}>
          <div className={`w-full h-full animate-jigglewiggleshrink`}>
            <TileRender tileData={tiles[gridData.getChoice()[0]]} />
          </div>
        </div>
      ) : (
        <div
          className="w-full h-full text-2xl text-black border relative cursor-pointer"
          style={{
            background:
              gridData.getEntropy() == 0
                ? "red"
                : `rgba(${
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
