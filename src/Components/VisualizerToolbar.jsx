import React from "react";
import TileSelectionButton from "./TileSelectionButton";

const VisualizerToolbar = ({
  onStartVisualization,
  onStopVisualization,
  onReset,
  tileSelection,
  onTileSelection,
  tiles,
}) => {
  return (
    <div className="mt-12 bg-darkest rounded-2xl border max-h-[40vw] w-56 border-coloredtext/25 flex flex-col">
      <button
        className="bg-darkest p-4 rounded-t-2xl border-coloredtext/25 hover:bg-light font-sans"
        onClick={onStartVisualization}
      >
        Start Visualization
      </button>
      <button
        className="bg-darkest p-4 border-t border-coloredtext/25 hover:bg-light font-sans"
        onClick={onStopVisualization}
      >
        Pause Visualization
      </button>
      <button
        className="bg-darkest p-4 border-t border-coloredtext/25 hover:bg-light font-sans"
        onClick={onReset}
      >
        Reset
      </button>
      <span className="w-full h-0 border-b-4 border-coloredtext/25 mb-4"></span>
      <h1 className="font-sans text-2xl text-white text-center mb-4">
        Manual Mode
      </h1>
      <div className="w-full h-full overflow-y-scroll rounded-b-2xl">
        {tiles?.map((tileData, index) => {
          if (index == 0) {
            return;
          }
          return (
            <TileSelectionButton
              key={index}
              index={index}
              tileSelection={tileSelection}
              tileData={tileData}
              onSelect={onTileSelection}
            />
          );
        })}
      </div>
    </div>
  );
};

export default VisualizerToolbar;
