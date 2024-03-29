import React, { useEffect, useState, useRef } from "react";
import { GRID_WIDTH, GRID_HEIGHT, GridData } from "../Globals";
import Tile from "./Tile";
import VisualizerToolbar from "./VisualizerToolbar";

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
  const [tileSelection, setTileSelection] = useState(1);

  const openSet = useRef();
  const shouldStartLoop = useRef();
  const currentSelectedRotation = useRef();
  const manualStart = useRef();

  useEffect(() => {
    openSet.current = new Set(gridData);
    currentSelectedRotation.current = 0;
    manualStart.current = false;
  }, []);

  useEffect(() => {
    if (shouldStartLoop.current === true) {
      //Run the algorithm
      setIntervalId(setInterval(() => updateLoop(), 200));
      shouldStartLoop.current = false;
    }
  }, [gridData]);

  const initializeGridData = () => {
    setGridData(() => {
      let array = [];
      for (let y = 0; y < GRID_HEIGHT; y++) {
        for (let x = 0; x < GRID_WIDTH; x++) {
          const index = y * GRID_WIDTH + x;
          array[index] = new GridData(index, tiles.length);
        }
      }
      openSet.current = new Set(array);
      return array;
    });
  };

  const handleStartVisualization = () => {
    if (intervalId !== 0 || manualStart.current) {
      clearInterval(intervalId);
      setIntervalId(setInterval(() => updateLoop(), 200));
      manualStart.current = false;
      return;
    }

    shouldStartLoop.current = true;
    initializeGridData(true);
  };

  const handleStopVisualization = () => {
    clearInterval(intervalId);
    shouldStartLoop.current = false;
  };

  const handleTileSelection = (index, rotateAmount) => {
    setTileSelection(index);
    currentSelectedRotation.current = rotateAmount;
  };

  const handleManualSelection = (index) => {
    clearInterval(intervalId);
    const tile = gridData[index];
    if (
      tile.isCollapsed() ||
      !tile.isOption(tileSelection, currentSelectedRotation.current)
    )
      return;
    tile.setChoice(tileSelection, currentSelectedRotation.current);
    updateNeighbors(tile);
    openSet.current.delete(tile);
    manualStart.current = true;
  };

  const handleReset = () => {
    clearInterval(intervalId);
    setIntervalId(0);
    shouldStartLoop.current = false;
    initializeGridData(false);
    manualStart.current = false;
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

  const updateNeighbors = (startingGridTile) => {
    const [x, y] = startingGridTile.getPos();

    setGridData((oldData) => {
      const newGrid = [...oldData];

      let gridStack = [];
      let closedSet = new Set();

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
  };

  const updateLoop = () => {
    if (openSet.current.size === 0) {
      handleStopVisualization();
      return;
    }

    let openSetArray = Array.from(openSet.current).sort((a, b) => {
      return a.getEntropy() - b.getEntropy();
    });

    //Find all the minimum values
    let startingGridTile = openSetArray[0];
    if (!startingGridTile) return;

    let startingValue = startingGridTile.getEntropy();
    for (const i in openSetArray) {
      if (
        openSetArray[i].getEntropy() != startingValue ||
        i == openSetArray.length - 1
      ) {
        startingGridTile = openSetArray[Math.floor(Math.random() * i)];
        break;
      }
    }

    const choicesLeft = startingGridTile.collapse();
    if (!choicesLeft) {
      return;
    }

    updateNeighbors(startingGridTile);
    openSet.current.delete(startingGridTile);
  };

  return (
    <div
      className="w-screen h-screen bg-gradient-to-b from-darkest to-light flex flex-row gap-8 items-center justify-center"
      id="Visualize"
    >
      <div className="mt-12 rounded-2xl w-[40vw] h-[40vw] border border-coloredtext/25 bg-darkest p-8">
        <div className="w-full h-full grid grid-cols-16 grid-rows-16">
          {gridData?.map((gridData, index) => {
            return (
              <Tile
                key={index}
                tiles={tiles}
                gridData={gridData}
                handleManualSelection={handleManualSelection}
              />
            );
          })}
        </div>
      </div>
      <VisualizerToolbar
        onStartVisualization={handleStartVisualization}
        onStopVisualization={handleStopVisualization}
        onReset={handleReset}
        onTileSelection={handleTileSelection}
        tileSelection={tileSelection}
        tiles={tiles}
      />
    </div>
  );
};

export default Visualizer;
