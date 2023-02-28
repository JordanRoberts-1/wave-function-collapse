import React, { useEffect, useState } from "react";
import Tile from "./Tile";

const Visualizer = ({ tiles }) => {
  const [gridData, setGridData] = useState(Array(16 * 16).fill(0));
  const [intervalId, setIntervalId] = useState(0);

  useEffect(() => {
    console.log(gridData);
  }, [gridData]);

  const handleStartVisualization = () => {
    //Run the algorithm
    setIntervalId(
      setInterval(() => {
        updateLoop();
      }, 2000)
    );
  };

  const handleStopVisualization = () => {
    clearInterval(intervalId);
  };

  const updateLoop = () => {
    const x = Math.floor(Math.random() * (16 + 1));
    const y = Math.floor(Math.random() * (16 + 1));
    const index = y * 16 + x;
    setGridData((oldData) => {
      const newGrid = [...oldData];
      newGrid[index] = 1;
      return newGrid;
    });
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-darkest to-light flex flex-row items-center">
      <div className="w-[40vw] h-[40vw] grid grid-cols-16 grid-rows-16 m-16">
        {gridData?.map((gridTileIndex, index) => {
          const tileData = tiles[gridTileIndex];
          return (
            <Tile
              key={index}
              tileData={tileData}
              gridTileIndex={gridTileIndex}
            />
          );
        })}
      </div>
      <button className="border bg-gray-600" onClick={handleStartVisualization}>
        Start Visualization
      </button>{" "}
      <button className="border bg-gray-600" onClick={handleStopVisualization}>
        End Visualization
      </button>
    </div>
  );
};

export default Visualizer;
