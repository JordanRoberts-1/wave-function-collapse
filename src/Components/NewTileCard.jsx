import React from "react";

const NewTileCard = ({ tileLength, gridMax, onAddTile }) => {
  return tileLength <= gridMax ? (
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
  ) : null;
};

export default NewTileCard;
