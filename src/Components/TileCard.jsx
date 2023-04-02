import { React, useState } from "react";
import TileRender from "./TileRender.jsx";
import TrashIcon from "./TrashIcon.jsx";
import ExpandedTileCard from "./ExpandedTileCard.jsx";

const TileCard = ({ onUpdateColors, globalIndex, tileData, onRemoveTile }) => {
  const [cardExpanded, setCardExpanded] = useState(false);

  const handleCardOpen = () => {
    setCardExpanded(!cardExpanded);
  };

  const handleColorUpdate = (index, color) => {
    let colorData = tileData.getColors();
    colorData = colorData?.map((c, i) => {
      if (i === index) {
        return color;
      } else {
        return c;
      }
    });
    onUpdateColors(globalIndex, colorData);
  };

  return (
    <li>
      <div className="transform transition duration-300 hover:scale-150 flex flex-col items-center gap-1 group">
        <div
          className="animate-jigglewiggle rounded-2xl bg-darkest/90 w-40 h-52 p-4 pt-2 flex flex-col items-center backdrop-blur-lg hover:bg-darkest/100 hover:rounded-xl cursor-pointer"
          onClick={handleCardOpen}
        >
          <div className="w-32 h-32 mb-4">
            <TileRender tileData={tileData} />
          </div>
          <div className="h-2 w-full border-t-2 border-selection/25 mb-2" />
          <h1 className="text-2xl font-retro text-selection">
            Tile {`#${globalIndex}`}
          </h1>
        </div>
        <div className="w-fit h-fit bg-darkest/90 rounded-2xl justify-center p-1 invisible group-hover:flex group-hover:visible">
          <button
            className="cursor-pointer w-4 h-4"
            onClick={() => onRemoveTile(globalIndex)}
          >
            <TrashIcon />
          </button>
        </div>
      </div>
      {/* Expanded Card*/}
      {cardExpanded ? (
        <ExpandedTileCard
          onCardOpen={handleCardOpen}
          onRemoveTile={onRemoveTile}
          onColorUpdate={handleColorUpdate}
          tileData={tileData}
          globalIndex={globalIndex}
        />
      ) : null}
    </li>
  );
};

export default TileCard;
