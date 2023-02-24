import { React } from "react";
import TileCard from "./TileCard";
import COLOR_MAP from "../Colors";

const TileEditor = ({ onTileUpdate, tileData }) => {
  const handleUpdateTileData = (index, newData) => {
    onTileUpdate(index, newData);
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-black to-darkest">
      <TileCard
        onUpdate={handleUpdateTileData}
        globalIndex={0}
        colorData={tileData[0]}
      />
    </div>
  );
};

export default TileEditor;
