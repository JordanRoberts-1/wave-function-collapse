import React, { useEffect, useState, useRef } from "react";
import { GRID_WIDTH, GRID_HEIGHT, GridData } from "../Globals";
import Tile from "./Tile";

const Visualizer = ({ tiles }) => {
  const [gridData, setGridData] = useState(() => {
    let array = [];
    for (let y = 0; y < GRID_HEIGHT; y++) {
      for (let x = 0; x < GRID_WIDTH; x++) {
        const index = y * GRID_WIDTH + x;
        array[index] = new GridData(index, tiles.length);
      }
    }
    return array;
  });

  const [intervalId, setIntervalId] = useState(0);
  const openSet = useRef();

  useEffect(() => {
    openSet.current = new Set(gridData);
  }, []);

  const handleStartVisualization = () => {
    if (intervalId !== 0) {
      return;
    }
    //Run the algorithm
    setIntervalId(setInterval(() => updateLoop(), 200));
  };

  const handleStopVisualization = () => {
    clearInterval(intervalId);
    setIntervalId(0);
  };

  const indexFromPos = (x, y) => {
    if (x < 0) {
      x += GRID_WIDTH;
    } else if (x >= GRID_WIDTH) {
      x %= GRID_WIDTH;
    }

    if (y < 0) {
      y += GRID_HEIGHT;
    } else if (y >= GRID_HEIGHT) {
      y %= GRID_HEIGHT;
    }
    return y * GRID_WIDTH + x;
  };

  const getNeighborsObject = (x, y) => {
    return {
      top: gridData[indexFromPos(x, y - 1)],
      right: gridData[indexFromPos(x + 1, y)],
      bottom: gridData[indexFromPos(x, y + 1)],
      left: gridData[indexFromPos(x - 1, y)],
    };
  };

  const updateLoop = () => {
    console.log(`updateloop: ${openSet.current.size}`);
    let openSetArray = Array.from(openSet.current).sort((a, b) => {
      return a.getEntropy() - b.getEntropy();
    });

    //Find all the minimum values
    let startingValue = openSetArray[0].getEntropy();
    let startingGridTile = openSetArray[0];
    for (const i in openSetArray) {
      if (openSetArray[i].getEntropy != startingValue) {
        let slicedArray = openSetArray.slice(0, i);
        startingGridTile = slicedArray[Math.floor(Math.random() * i)];
      }
    }
    console.log(startingGridTile);
    const index = startingGridTile.getIndex();
    const [x, y] = startingGridTile.getPos();

    setGridData((oldData) => {
      const newGrid = [...oldData];

      let gridStack = [];
      let closedSet = new Set();

      startingGridTile.setChoice(2);
      for (const [key, neighbor] of Object.entries(getNeighborsObject(x, y))) {
        gridStack.push(neighbor);
      }

      do {
        const current = gridStack.pop();
        const [x, y] = current.getPos();
        const neighborsGridData = getNeighborsObject(x, y);
        if (closedSet.has(current)) {
          continue;
        }
        const nodeUpdated = current.updateOptions(neighborsGridData, tiles);
        if (nodeUpdated) {
          for (const [key, neighbor] of Object.entries(neighborsGridData)) {
            gridStack.push(neighbor);
          }
        }
        closedSet.add(current);
      } while (gridStack.length !== 0);
      return newGrid;
    });

    openSet.current.delete(gridData[index]);
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-darkest to-light flex flex-row items-center">
      <div className="w-[40vw] h-[40vw] grid grid-cols-16 grid-rows-16 m-16">
        {gridData?.map((gridData, index) => {
          return <Tile key={index} tiles={tiles} gridData={gridData} />;
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
