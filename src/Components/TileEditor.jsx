import { React } from "react";
import TileCard from "./TileCard";
import COLOR_MAP, { TILE_SIZE, TileData } from "../Globals";

const TileEditor = ({
  onColorUpdate,
  onConstraintUpdate,
  tiles,
  onAddTile,
  onRemoveTile,
}) => {
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
              onUpdateConstraints={onConstraintUpdate}
              onUpdateColors={onColorUpdate}
              globalIndex={index}
              tileData={tileData}
              onRemoveTile={onRemoveTile}
            />
          );
        })}
        {tiles.length <= gridMax ? (
          <li>
            <div
              className="rounded-2xl bg-darkest/90 w-32 h-40 p-4 pt-2 flex flex-col items-center transform transition duration-300 hover:scale-110 backdrop-blur-lg hover:bg-darkest/100 hover:rounded-xl cursor-pointer"
              onClick={onAddTile}
            >
              <div className="text-8xl font-bold font-retro text-selection w-20 h-20 text-center mb-4">
                +
              </div>
              <div className="h-2 w-full border-t-2 border-selection/25" />
              <h1 className="text-xl font-retro text-selection">New Tile</h1>
            </div>
          </li>
        ) : null}
      </ol>
    </div>
  );
};

export default TileEditor;
