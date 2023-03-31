import { React } from "react";
import TileCard from "./TileCard";
import COLOR_MAP, { TILE_SIZE, TileData } from "../Globals";

const TileEditor = ({
  onColorUpdate,
  onConstraintUpdate,
  tiles,
  onAddTile,
}) => {
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
              onUpdateConstraints={onConstraintUpdate}
              onUpdateColors={onColorUpdate}
              globalIndex={index}
              tileData={tileData}
            />
          );
        })}
        <li>
          <div
            className="rounded-2xl bg-darkest/90 max-w-sm h-full p-8 flex flex-col items-center transform transition duration-300 hover:scale-110 backdrop-blur-lg hover:bg-darkest/100 hover:rounded-xl cursor-pointer"
            onClick={onAddTile}
          >
            <h1>Add Tile</h1>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default TileEditor;
