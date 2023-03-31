import { React, useState, useEffect } from "react";
import COLOR_MAP, { TILE_SIZE, TileData } from "../Globals.js";

const TileCard = ({
  onUpdateColors,
  onUpdateConstraints,
  globalIndex,
  tileData,
}) => {
  const [cardExpanded, setCardExpanded] = useState(false);
  const [currentColor, setCurrentColor] = useState("white");

  useEffect(() => {});

  const handleColorChange = (colorKey) => {
    setCurrentColor(colorKey);
  };

  const handleCardOpen = () => {
    setCardExpanded(!cardExpanded);
  };

  const handleConstraintChange = (constraintKey, newValue) => {
    if (newValue < 1) newValue = 1;
    onUpdateConstraints(globalIndex, constraintKey, newValue);
  };

  const handleClick = (index, color) => {
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
      <div
        className="rounded-2xl bg-darkest/90 max-w-sm h-full p-8 flex flex-col items-center transform transition duration-300 hover:scale-110 backdrop-blur-lg hover:bg-darkest/100 hover:rounded-xl cursor-pointer"
        onClick={handleCardOpen}
      >
        <h1>Tile {`#${globalIndex}`}</h1>
      </div>
      {/* Expanded Card*/}
      {cardExpanded ? (
        <div
          className="fixed z-20 w-screen h-screen left-0 top-0 grid place-items-center bg-coloredtext/5 backdrop-blur-lg"
          onClick={handleCardOpen}
        >
          <div
            className="animate-growFromNothing grid grid-rows-1 grid-cols-[70%_30%] fixed z-30 w-[80%] h-[90%] bg-gradient-to-bl from-darkest to-dark rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/*tile color grid*/}
            <div className="flex flex-row items-center justify-center p-10 m-4 my-8 border-r-2 border-r-coloredtext/25">
              <div className="flex flex-col items-center justify-center w-[100%] h-[100%]">
                <div className="grid grid-rows-3 grid-cols-3 place-items-center gap-2 w-[90%] max-w-[90%]">
                  {tileData?.getColors()?.map((color, index) => {
                    return (
                      <button
                        key={index}
                        onClick={() => handleClick(index, currentColor)}
                        style={{ background: `${COLOR_MAP[color]}` }}
                        className="w-full h-0 shadow-lg pb-full rounded-lg"
                      ></button>
                    );
                  })}
                </div>
              </div>
            </div>
            {/*Right side tool menu*/}
            <div className="flex flex-col gap-4 m-4 my-8">
              <h1 className="text-5xl w-full text-center font-sans text-coloredtext border-b-2 pb-4 border-b-coloredtext/25">
                Tile {`#${globalIndex}`}
              </h1>
              {Object.keys(COLOR_MAP).map((color, index) => {
                return (
                  <button
                    key={index}
                    style={{ color: `${color}` }}
                    onClick={() => {
                      handleColorChange(color);
                    }}
                  >
                    {color}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </li>
  );
};

export default TileCard;
