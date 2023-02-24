import { React, useState, useEffect } from "react";
import COLOR_MAP from "../Colors.js";

const TileCard = ({ onUpdate, globalIndex, colorData }) => {
  const [cardExpanded, setCardExpanded] = useState(false);
  const handleCardOpen = () => {
    setCardExpanded(!cardExpanded);
  };

  const handleClick = (index, color) => {
    colorData = colorData?.map((c, i) => {
      if (i === index) {
        return color;
      } else {
        return c;
      }
    });
    onUpdate(globalIndex, colorData);
  };

  return (
    <>
      <div className="flex flex-col">
        {colorData?.map((color, index) => (
          <button
            key={index}
            onClick={() => handleClick(index, COLOR_MAP.red)}
            style={{ color: `${color}` }}
          >
            Add Red to index {index}, color should be: {`text-[${color}]`}
          </button>
        ))}
      </div>
    </>
  );
};

export default TileCard;
