import { React } from "react";
import TileCard from "./TileCard";
import COLOR_MAP, { TILE_SIZE, TileData } from "../Globals";

const TileEditor = ({ onColorUpdate, onConstraintUpdate, tiles }) => {
  const handleUpdateConstraintChange = (index, constraintKey, newValue) => {
    onConstraintUpdate(index, constraintKey, newValue);
  };

  const handleUpdateColorData = (index, newColors) => {
    onColorUpdate(index, newColors);
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-black to-darkest flex flex-col items-center">
      <ol className="w-fit grid grid-rows- grid-cols-3 gap-2 place-items-center">
        {tiles?.map((tileData, index) => {
          if (index == 0) {
            return;
          }
          return (
            <TileCard
              key={index}
              onUpdateConstraints={handleUpdateConstraintChange}
              onUpdateColors={handleUpdateColorData}
              globalIndex={index}
              tileData={tileData}
            />
          );
        })}
      </ol>
    </div>
  );
};

export default TileEditor;
