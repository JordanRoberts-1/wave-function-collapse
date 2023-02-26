import { React } from "react";
import TileCard from "./TileCard";
import COLOR_MAP from "../Colors";

const TileEditor = ({ onTileUpdate, tileData }) => {
  const handleUpdateTileData = (index, newData) => {
    onTileUpdate(index, newData);
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-black to-darkest flex flex-col items-center">
      <ol className="w-fit grid grid-rows- grid-cols-3 gap-2 place-items-center">
        {tileData?.map((tileColors, index) => {
          return (
            <TileCard
              key={index}
              onUpdate={handleUpdateTileData}
              globalIndex={index}
              colorData={tileColors}
            />
          );
        })}
      </ol>
    </div>
  );
};

export default TileEditor;
