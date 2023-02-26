import { React } from "react";
import TileCard from "./TileCard";
import COLOR_MAP, { TILE_SIZE, TileData } from "../Globals";

const TileEditor = ({ onTileUpdate, tiles }) => {
  const handleUpdateTileData = (index, newData) => {
    onTileUpdate(index, newData);
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-black to-darkest flex flex-col items-center">
      <ol className="w-fit grid grid-rows- grid-cols-3 gap-2 place-items-center">
        {tiles?.map((tileData, index) => {
          return (
            <TileCard
              key={index}
              onUpdate={handleUpdateTileData}
              globalIndex={index}
              colorData={tileData.getColors()}
            />
          );
        })}
      </ol>
    </div>
  );
};

export default TileEditor;
