import React, { useEffect, useState } from "react";
import Tile from "./Tile";

const Visualizer = ({ tiles }) => {
  const [gridData, setGridData] = useState(Array(16 * 16).fill(0));

  useEffect(() => {
    console.log(gridData);
  }, [gridData]);

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-darkest to-light flex flex-col">
      <div className="w-[50vw] h-[50vw] grid grid-cols-16 grid-rows-16">
        {gridData?.map((gridTileIndex, index) => {
          const tileData = tiles[gridTileIndex];
          console.log(tileData);
          return (
            <Tile
              key={index}
              tileData={tileData}
              gridTileIndex={gridTileIndex}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Visualizer;
