import { React } from "react";
import TileCard from "./TileCard";
import NewTileCard from "./NewTileCard";

const TileEditor = ({ onColorUpdate, tiles, onAddTile, onRemoveTile }) => {
  const gridMax = 8 * 3;

  return (
    <div
      className="w-screen h-screen bg-gradient-to-b from-black to-darkest flex flex-col items-center p-16"
      id="TileEditor"
    >
      <ol className="mt-12 w-fit grid grid-cols-8 grid-rows-3 gap-8 gap-y-12 place-items-center">
        {tiles?.map((tileData, index) => {
          if (index == 0) {
            return;
          }
          return (
            <TileCard
              key={index}
              onUpdateColors={onColorUpdate}
              globalIndex={index}
              tileData={tileData}
              onRemoveTile={onRemoveTile}
            />
          );
        })}
        <NewTileCard
          tileLength={tiles.length}
          gridMax={gridMax}
          onAddTile={onAddTile}
        />
      </ol>
    </div>
  );
};

export default TileEditor;
